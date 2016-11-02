// The GithubService is responsible for API requests.

import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class GithubService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {
	let githubUrl = 'https://api.github.com/search/repositories';
	let params = new URLSearchParams();
	params.set('q', term);
	params.set('action', 'opensearch');
	params.set('format', 'json');
	params.set('callback', 'JSONP_CALLBACK');
	// TODO: Add error handling
	return this.jsonp
			   .get(githubUrl, { search: params })
			   .map(response => <string[]> response.json().data.items);
  }

  getIssues (repo) {
	let issuesUrl = 'https://api.github.com/search/issues';
	let params = new URLSearchParams();
	params.set('q', 'repo:' + repo.owner.login + '/' + repo.name);  
	params.set('action', 'opensearch');
	params.set('format', 'json');
	params.set('callback', 'JSONP_CALLBACK');
	// TODO: Add error handling
	return this.jsonp
			   .get(issuesUrl, { search: params })
			   .map(response => <string[]> response.json().data.items);
  }
}