import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'HACAFrontend';
	array = [{ a: 't', b: { c: 1 } }];

	constructor() {}
}
