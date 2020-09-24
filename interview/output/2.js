var name = "global name";

var a = {
	name: "name A",
	func: function () {
		console.log(this.name);
	},
};

a.func();
window.a.func();

var func = a.func;
func();

func = window.a.func;
func();