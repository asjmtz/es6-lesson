import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
	configureRouter(config, router){

		config.title = 'ES2015';
		config.map([
			{
				route: ['', 'class'],	
				title: 'Class', 
				moduleId: './page/class/index', 
				nav: true
			},
			{
				route: 'arrow',	
				title: 'Arrow',
				moduleId: './page/arrow/index',
				nav: true
			}
		]);

		this.router = router;
	}
}

