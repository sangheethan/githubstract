import { Component, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@Component({
	selector: 'charts',
	template: `
	<div *ngIf="doughnutChartData">
		<div class="col-l-4 col-md-4 col-s-4 col-xs-4"style='display:block'>    
			<canvas width="300" height="300" baseChart
				[data]="doughnutChartData"
				[labels]="doughnutChartLabels"
				[chartType]="doughnutChartType"
				[options]="chartOptions"
				(chartHover)="chartHovered($event)"
				(chartClick)="chartClicked($event)">
			</canvas>
		</div>
	</div>`
})
export class GithubChartsComponent {	
	@Input() public doughnutChartData: number[];
	public doughnutChartLabels:string[] = ['Stargazers', 'Watchers', 'Forks'];  
	public doughnutChartType:string = 'doughnut';
	public chartOptions = {
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
