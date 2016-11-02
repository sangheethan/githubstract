import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { GithubService }    from '../service/github.service';

@Component({
	moduleId: module.id,
	selector: 'search-repos',
	templateUrl: '../../../view/github-search.view.html',
	providers: [GithubService]
})

export class GithubSearchComponent {
	// selectRepository output decorator lets the outside world know that a repository has been selected
	@Output() selectRepository = new EventEmitter();
	items: Observable<string[]>;
	selectedRepository: Object;
	private searchTermStream = new Subject<string>();

	// TODO: Inject service and start listening for search terms. Wait for 300s before start searching.
	constructor(private githubService: GithubService){
		this.items = this.searchTermStream
	      .debounceTime(300)
	      .distinctUntilChanged()
	      .switchMap((term: string) => this.githubService.search(term));		
	}

	// TODO: Search for the repository.
	search(term: string) { 
		this.searchTermStream.next(term);
	}
	
	// TODO: Select the repository and emit an event with the selected repository.
	selectRepo(repository) {
		this.selectedRepository = repository;
		this.selectRepository.emit({
	      value: repository
	    })
	}

	// TODO: Return the size of the object
	sizeOf(subject) {
		return Object.keys(subject).length;
	}
	
}