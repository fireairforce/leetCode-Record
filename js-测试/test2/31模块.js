function createModule(str1, str2) {
   var obj = {

   };
   obj.greeting = str1;
   obj.name = str2;
   obj.sayIt = function(){
       return this.greeting + ', ' + this.name; 
   }
   return obj;
}