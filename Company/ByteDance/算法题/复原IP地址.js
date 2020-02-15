//复原IP地址，使用回溯来写(是真的麻烦)
var restoreIpAddresses = function(s) {
  var res = [];
  function hs(result, str) {
    if (
      (result.length === 4 && str.length !== 0) ||
      result.length > 4 ||
      (result.length < 4 && str.length == 0)
    )
      return;
    if (result.length === 4 && str.length === 0) {
      res.push(result.join("."));
      return;
    }
    hs([...result, str[0]], str.slice(1));
    if (str[0] != 0 && str.length > 1)
      hs([...result, str.slice(0, 2)], str.slice(2));
    if (str[0] != 0 && parseInt(str.slice(0, 3)) <= 255 && str.length > 2)
      hs([...result, str.slice(0, 3)], str.slice(3));
  }
  hs([], s);
  return res;
};
