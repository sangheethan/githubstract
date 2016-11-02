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
var github_service_1 = require('../service/github.service');
var GithubComponent = (function () {
    // TODO: Inject the service provider
    function GithubComponent(githubService) {
        this.githubService = githubService;
    }
    // TODO: Store the repository object, populate chart data and request for issues.
    GithubComponent.prototype.selectRepository = function (repository) {
        this.selectedRepository = repository.value;
        this.getIssues();
        this.setChartData();
    };
    // TODO: Request for the issues from the service provider.
    GithubComponent.prototype.getIssues = function () {
        this.selectedRepositoryIssues = this.githubService.getIssues(this.selectedRepository);
    };
    // TODO: Populate the chart data
    GithubComponent.prototype.setChartData = function () {
        this.doughnutChartData = [+this.selectedRepository.stargazers_count, +this.selectedRepository.watchers_count, +this.selectedRepository.forks_count];
    };
    GithubComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'github-dashboard',
            templateUrl: '../../../view/github.view.html',
            providers: [github_service_1.GithubService]
        }), 
        __metadata('design:paramtypes', [github_service_1.GithubService])
    ], GithubComponent);
    return GithubComponent;
}());
exports.GithubComponent = GithubComponent;
//# sourceMappingURL=github.component.js.map