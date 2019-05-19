function bindThis(f, oTarget) {
   if(f.bind){
       return f.bind(oTarget);
   } else {
       return function(){ 
           // apply的第二个参数是可选的，所以并不需要一定要有；我觉得原因是bind返回的是一个函数，而apply方法是立即执行函数，所以需要放在一个函数里面，到调用的时候再立即执行。小小拙见，望批评指正。
           return f.apply(oTarget,arguments);
       }
   }
}