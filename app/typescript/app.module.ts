// The main app module which will include the github module

import './lib/rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubModule } from './github/github.module';
import { AppComponent } from './app.component';
import { GithubService } from './github/service/github.service'; 

@NgModule({
	imports: [ BrowserModule, GithubModule ],
	declarations: [ AppComponent ],
	providers: [GithubService],
	bootstrap: [AppComponent]
})

export class AppModule{}