import { Component } from '@angular/core';
import { Observable } 		from 'rxjs/Observable';
import { GithubService }    from '../service/github.service';

@Component({
	moduleId: module.id,
	selector: 'github-dashboard',
	templateUrl: '../../../view/github.view.html',
	providers: [GithubService]
})
export class GithubComponent {	
	// selectedRepository is an Object but use any to resolve compile time errors.
	selectedRepository: any;
	selectedRepositoryIssues: Observable<string[]>;
	doughnutChartData:number[];

	// TODO: Inject the service provider
	constructor(private githubService: GithubService){}

	// TODO: Store the repository object, populate chart data and request for issues.
	selectRepository(repository) {
		this.selectedRepository = repository.value;
		this.getIssues();
		this.setChartData();
	}

	// TODO: Request for the issues from the service provider.
	getIssues() {
		this.selectedRepositoryIssues = this.githubService.getIssues(this.selectedRepository);
	}

	// TODO: Populate the chart data
	setChartData() {
		this.doughnutChartData = [+this.selectedRepository.stargazers_count, +this.selectedRepository.watchers_count, +this.selectedRepository.forks_count];
	}
}