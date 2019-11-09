// 代码来自于《前端早读课1738期》

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 构造函数Promise，里面有state和result两个属性
function Promise (f) {
    this.state = PENDING;
    this.result = null;
    this.callbacks = [];

    let onFulfilled = value => transition(this, FULFILLED, value);
    let onRejected = reason => transition(this, REJECTED, reason);

    let ignore = false;
    let resolve = value => {
        if(ignore) {
            return
        }
        ignore = true;
        resolvePromise(this, value, onFulfilled, onRejected)
    }
    let reject = reason => {
        if(ignore) {
            return;
        }
        ignore = true;
        onRejected(reason);
    }
    try {
        f(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

const handleCallbacks = (callbacks, state, result) => {
    while(callbacks.length) {
        handleCallback(callbacks.shift(), state, result);
    }
}

// transition为状态转移函数，用于promise里面pending向其他状态的转移
const transition = (promise, state, result) => {
    if(promise.state !== PENDING) return 
    promise.state = state;
    promise.result = result;
    setTimeout(() => handleCallbacks(promise.callbacks, state, result),0)
}

// onFulfilled的参数是value,onRejected的参数是result
Promise.prototype.then = function(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
        let callback = { onFulfilled, onRejected, resolve, reject } ;
        
        if(this.state  === PENDING) {
            // state是 pending 状态就存进 callbacks 里面
            this.callbacks.push(callback);
        } else {
            setTimeout(() => {
                handleCallback(callback, this.state, this.result)
            }, 0)
        }
    })
}
// 该函数根据state判断promise是走onFulfilled还是走onRejected
const handleCallback = (callback, state, reject) => {
    let { onFulfilled, onRejected, resolve, reject } = callback;
    try {
        if(state === FULFILLED) {
            // 判断onFulfilled是否为函数，是的话就用它的返回值作为下一个promise的result,否则当前promise的result作为返回函数
            isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result); 
        } else if (state === REJECTED) {
            isFunction(onRejected) ? resolve(onRejected(result)) : reject(result);
        }
    } catch (err) {
        reject(err);
    }
}

const resolvePromise = (promise, result, resolve, reject) => {
    // result不是promise本身就抛错误
    if(result === promise) {
        let reason = new TypeError('Can not fufilled promise with itself')
        resolve(reason);
    }
    // 判断result是不是promise类型，是就调用then来去value或reason
    if(isPromise(result)) {
        return result.then(resolve, reject);
    }
    // 判断result是不是thenable对象，是就先取出then,再用new Promise去进行一个迭代的过程
    if(isThenable(result)) {
        try {
            let { then } = result;
            if(isFunction(then)) {
                return new Promise(then.bind(result).then(resolve, reject));
            }
        } catch(err) {
            return reject(err);
        }
    }
    // 都不是就返回结果
    resolve(result);
}