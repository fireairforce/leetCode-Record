/**
 * @param {string} text
 * @return {string}
 */
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  text=text.replace(/&quot;/g,'\"')
  .replace(/&apos;/g,'\'')
  .replace(/&gt;/g,'>')
  .replace(/&lt;/g,'<')
  .replace(/&frasl;/g,'\/')
  .replace(/&amp;/g,'&')
  return text
};

// console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."));
// console.log(entityParser("and I quote: &quot;...&quot;"));
// console.log(entityParser("Stay home! Practice on Leetcode :)"));
// console.log(entityParser("x &gt; y &amp;&amp; x &lt; y is always false"));
// console.log(entityParser("leetcode.com&frasl;problemset&frasl;all"));
// console.log(entityParser("&amp;gt;"));


