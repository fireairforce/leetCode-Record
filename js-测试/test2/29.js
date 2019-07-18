function partialUsingArguments(fn) {
   var args = Array.prototype.slice.call(arguments,1);
   var result = function(){
       return fn.apply(null,args.concat([].slice.call(arguments)))
   }
   return result;
}