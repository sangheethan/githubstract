// This is the github module which has all the components and services related to the gihub module.

import { NgModule }					 from '@angular/core';
import { CommonModule }				 from '@angular/common';
import { FormsModule }				 from '@angular/forms';
import { HttpModule, JsonpModule } 	 from '@angular/http';

import { GithubComponent } 			 from './component/github.component';
import { GithubService }			 from './service/github.service';
import { GithubSearchComponent } 	 from './component/github-search.component';
import { GithubRepositoryComponent } from './component/github-repository.component';
import { GithubChartsComponent } 	 from './component/github-charts.component';
import { ChartsModule } 			 from 'ng2-charts/ng2-charts';

import { BytesPipe } from '../lib/bytes.pipe';

@NgModule({
	imports: 		[CommonModule, FormsModule, HttpModule, JsonpModule, ChartsModule],
	declarations: 	[GithubComponent, GithubSearchComponent, GithubRepositoryComponent, GithubChartsComponent, BytesPipe],
	exports: 		[GithubComponent],
	providers:		[GithubService]
})

export class GithubModule {}