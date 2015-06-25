import {inject, customAttribute} from 'aurelia-framework';

import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css!';
import $ from 'jquery';

@customAttribute('highlight')
@inject(Element)

export class Highlight {

	constructor(element){
		this.element = element;
	
		console.log('highlight=======',element);
		hljs.highlightBlock($( this.element ));
	}
	valueChanged(newValue){
		console.log('valueChanged');
	}
} 