import { Component, Input } from '@angular/core';
import { Observable } 		from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'repository',
	templateUrl: '../../../view/github-repository.view.html',

})
export class GithubRepositoryComponent {	
	@Input() issues: Observable<string[]>;	
	@Input() repository: Object;
}