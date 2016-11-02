// Main app component the parent wrapper for all components. 

import { Component } from '@angular/core';
import './lib/rxjs-operators';

@Component({
	selector: "githubstract",
	template: `
		<github-dashboard></github-dashboard>
	`
})

export class AppComponent {}