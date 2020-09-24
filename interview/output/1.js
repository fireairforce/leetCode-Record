var name = "first";

(function foo() {
	var name = "second";
	console.log(this.name);
})();

console.log(this.name);