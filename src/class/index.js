// test Class
// 

import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css!';
import $ from 'jquery';

console.log('\n\n\nclass==========================================================\n\n\n');
export class ESClass{

	main(){
		alert("asdsdas");
		var s ;
		var ss = {};
	}
	codeString = this.main.toString();
	
	init(){

		// 这么写没有用
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
		console.log("hljs", $('pre code').length);
		// hljs.initHighlightingOnLoad();
	}

	// this.init();	
	activate(params, routeConfig, navigationInstruction){
		console.log('activate', params, routeConfig);
	}
	bind(bindingContext){

		console.log(bindingContext, $('router-view').html());
	}
}

var p = new ESClass;
p.init();
console.log('inint', $('router-view').html());

class Welcome{
	greet(){
		console.log('hello es6');
	}
}

class Person{
	constructor( name , type = 'person' ){
		this.name = name;
		this.type = type;
	}

	say( ){
		console.log(`i am ${this.name}, a ${ this.type } `);
	}

	smile(){
		console.log(':)');
	}
}

class ITman extends Person {
	constructor(name, type="ITman" ){
		super( name, type );
		this.language = 'JavaScript';
	}

	// new function 
	code(str){
		console.log(`${ this.language } : ${str} !!`);
	}

	smile(){
		super.smile();
		console.log( '233333333333333:)' );
	}

	// static function
	static wow(){
		console.log('static wowwwwwwwwwwwwww!!!!');
	}
}



//  welcome
var wel = new Welcome;
wel.greet();


// person
var per = new Person( 'tom' );
per.say();
per.smile();

// IT man
var it = new ITman( 'lol' );
it.say();
it.smile();
it.code('alert("hello world")');
ITman.wow();

