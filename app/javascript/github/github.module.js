// This is the github module which has all the components and services related to the gihub module.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var github_component_1 = require('./component/github.component');
var github_service_1 = require('./service/github.service');
var github_search_component_1 = require('./component/github-search.component');
var github_repository_component_1 = require('./component/github-repository.component');
var github_charts_component_1 = require('./component/github-charts.component');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var bytes_pipe_1 = require('../lib/bytes.pipe');
var GithubModule = (function () {
    function GithubModule() {
    }
    GithubModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, ng2_charts_1.ChartsModule],
            declarations: [github_component_1.GithubComponent, github_search_component_1.GithubSearchComponent, github_repository_component_1.GithubRepositoryComponent, github_charts_component_1.GithubChartsComponent, bytes_pipe_1.BytesPipe],
            exports: [github_component_1.GithubComponent],
            providers: [github_service_1.GithubService]
        }), 
        __metadata('design:paramtypes', [])
    ], GithubModule);
    return GithubModule;
}());
exports.GithubModule = GithubModule;
//# sourceMappingURL=github.module.js.map