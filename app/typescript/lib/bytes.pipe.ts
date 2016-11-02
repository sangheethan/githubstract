// A simple byte converter pipe which converts the size of a repository to the relevant units.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bytes'})
export class BytesPipe implements PipeTransform {
  transform(value: number, precision: number[]): any {

	if (isNaN(value) || !isFinite(value)) 
		return '-';

	if (typeof precision === 'undefined') 
		precision[0] = 1;

	var units = ['kB', 'MB', 'GB', 'TB', 'PB'],
	number = Math.floor(Math.log(value) / Math.log(1024));

	return (value / Math.pow(1024, Math.floor(number))).toFixed(precision[0]) +  ' ' + units[number];
  }
}