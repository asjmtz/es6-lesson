console.log('\n\n\ntemplate_string==========================================================\n\n\n');


var s1 = `In ES5 this 
is not legal`;

var name = "Bob", time = "today";
var s2 = `\n Hello ${name},\n how are you ${time}?`

var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

var s3 = tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"

var getMsg = function() {
	return {
		a: 'hello'
	};
}

var s4 = `msg:  ${getMsg()}`;
console.log(s1, s2, s3, s4);