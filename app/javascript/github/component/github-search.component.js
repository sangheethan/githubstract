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
var Subject_1 = require('rxjs/Subject');
var github_service_1 = require('../service/github.service');
var GithubSearchComponent = (function () {
    // TODO: Inject service and start listening for search terms. Wait for 300s before start searching.
    function GithubSearchComponent(githubService) {
        var _this = this;
        this.githubService = githubService;
        // selectRepository output decorator lets the outside world know that a repository has been selected
        this.selectRepository = new core_1.EventEmitter();
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.githubService.search(term); });
    }
    // TODO: Search for the repository.
    GithubSearchComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    // TODO: Select the repository and emit an event with the selected repository.
    GithubSearchComponent.prototype.selectRepo = function (repository) {
        this.selectedRepository = repository;
        this.selectRepository.emit({
            value: repository
        });
    };
    // TODO: Return the size of the object
    GithubSearchComponent.prototype.sizeOf = function (subject) {
        return Object.keys(subject).length;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GithubSearchComponent.prototype, "selectRepository", void 0);
    GithubSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-repos',
            templateUrl: '../../../view/github-search.view.html',
            providers: [github_service_1.GithubService]
        }), 
        __metadata('design:paramtypes', [github_service_1.GithubService])
    ], GithubSearchComponent);
    return GithubSearchComponent;
}());
exports.GithubSearchComponent = GithubSearchComponent;
//# sourceMappingURL=github-search.component.js.map