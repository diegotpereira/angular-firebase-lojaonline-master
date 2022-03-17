import { NgModule } from "@angular/core";
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule
    ],
    exports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule
    ]
})

export class MaterialModule {

}