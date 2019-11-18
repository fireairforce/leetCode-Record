Function.prototype.myapply = function (context) {
   if(typeof this !== 'function'){
       throw new TypeError('not function');
   }
   // 如果传递的执行上下文为null，就将环境切换为window    
   context = context || window;
   // 然后在context对象上新建一个属性,是一个函数    
   context.fn = this;
   //    这个地方是取参数
   let result;
   if(arguments[1]){
       result = context.fn(...arguments[1]);
   } else {
       result = context.fn();
   }
  //  删除了这个属性 　　    
   delete context.fn;
   return result;
}