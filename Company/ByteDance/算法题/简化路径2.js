/**
 * @param {string} path
 * @return {string}
 */

//  拆路径,过滤'',过滤'.',处理'..',合并路径即可
var simplifyPath = function(path) {
  let pathRoute = path.split("/");
  pathRoute.filter((_c) => _c !== "" && c !== ".");
  let i = 0;
  while (i < pathRoute.length) {
      if(pathRoute[i]=='..'){
          pathRoute.splice(i,1);  
       }
  }
};
