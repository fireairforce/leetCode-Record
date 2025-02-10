const fetchData = () => {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 6000;

        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve('success');
            } else {
                reject('fail');
            }
        }, delay)
    })
}

async function fetchWithTimeoutRetry(apiFn, timeout = 5000, retries) {
    for (let i = 0; i<retries;i++) {
        try {
            console.log('try');

            const res = await Promise.race([
                apiFn(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
            ])

            return res;
        } catch (err) {
            console.log('尝试失败');
            if (i === retries - 1) {
                throw new Error('请求都失败了')
            }
        }
    }
}

fetchWithTimeoutRetry(fetchData).catch(console.error);