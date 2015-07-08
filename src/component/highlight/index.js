import {inject, customAttribute} from 'aurelia-framework';

import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css!';

@customAttribute('highlight')
@inject(Element)

export class Highlight {

	constructor(element){
		this.element = element;
	}

	attached(){
		// console.log('highlight attached');
		hljs.highlightBlock( this.element );
	}

} 