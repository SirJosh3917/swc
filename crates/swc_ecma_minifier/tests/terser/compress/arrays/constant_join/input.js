var a = ["foo", "bar", "baz"].join("");
var a1 = ["foo", "bar", "baz"].join();
var a2 = ["foo", "bar", "baz"].join(null);
var a3 = ["foo", "bar", "baz"].join(void 0);
var a4 = ["foo", , "baz"].join();
var a5 = ["foo", null, "baz"].join();
var a6 = ["foo", void 0, "baz"].join();
var b = ["foo", 1, 2, 3, "bar"].join("");
var c = [boo(), "foo", 1, 2, 3, "bar", bar()].join("");
var c1 = [boo(), bar(), "foo", 1, 2, 3, "bar", bar()].join("");
var c2 = [1, 2, "foo", "bar", baz()].join("");
var c3 = [boo() + bar() + "foo", 1, 2, 3, "bar", bar() + "foo"].join("");
var c4 = [1, 2, null, undefined, "foo", "bar", baz()].join("");
var c5 = [boo() + bar() + "foo", 1, 2, 3, "bar", bar() + "foo"].join();
var c6 = [1, 2, null, undefined, "foo", "bar", baz()].join();
var d = ["foo", 1 + 2 + "bar", "baz"].join("-");
var e = [].join(foo + bar);
var f = [].join("");
var g = [].join("foo");