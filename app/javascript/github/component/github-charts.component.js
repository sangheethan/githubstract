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
var GithubChartsComponent = (function () {
    function GithubChartsComponent() {
        this.doughnutChartLabels = ['Stargazers', 'Watchers', 'Forks'];
        this.doughnutChartType = 'doughnut';
        this.chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'Repository Statistics'
            },
            legend: {
                labels: {
                    boxWidth: 7,
                    fontSize: 11
                },
                position: 'left'
            }
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GithubChartsComponent.prototype, "doughnutChartData", void 0);
    GithubChartsComponent = __decorate([
        core_1.Component({
            selector: 'charts',
            template: "\n\t<div *ngIf=\"doughnutChartData\">\n\t\t<div class=\"col-l-4 col-md-4 col-s-4 col-xs-4\"style='display:block'>    \n\t\t\t<canvas width=\"300\" height=\"300\" baseChart\n\t\t\t\t[data]=\"doughnutChartData\"\n\t\t\t\t[labels]=\"doughnutChartLabels\"\n\t\t\t\t[chartType]=\"doughnutChartType\"\n\t\t\t\t[options]=\"chartOptions\"\n\t\t\t\t(chartHover)=\"chartHovered($event)\"\n\t\t\t\t(chartClick)=\"chartClicked($event)\">\n\t\t\t</canvas>\n\t\t</div>\n\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], GithubChartsComponent);
    return GithubChartsComponent;
}());
exports.GithubChartsComponent = GithubChartsComponent;
//# sourceMappingURL=github-charts.component.js.map