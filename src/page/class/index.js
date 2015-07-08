// test Class
// 

export class ESClass{

	main(){
		alert("asdsdas");
		var s ;
		var ss = {};
	}
	codeString = this.main.toString();
	
	// this.init();	
	activate(params, routeConfig, navigationInstruction){
		console.log('activate', this.codeString);
	}
}


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