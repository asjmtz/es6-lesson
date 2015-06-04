// Object Literals 字面量对象 —— JSON？
console.log('\n\n\nobj==========================================================\n\n\n');

var theProtoObj = {
	id: 'v111',
	name: 'obj-N1'
};
var handler = 'handler';
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};

console.log(obj);