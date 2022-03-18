import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPipe } from './pipe/sorting.pipe';
import { MaterialModule } from '../material.module';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
	declarations: [
		SortingPipe,
		FilterPipe
	],
	exports: [
		SortingPipe,
		FilterPipe
	],
	imports: [
		CommonModule,
		MaterialModule
	]
})
export class SharedModule {}