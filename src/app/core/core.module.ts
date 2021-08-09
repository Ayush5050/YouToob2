import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumComponent } from './component/breadcrum/breadcrum.component';
import { GridInventoryComponent } from './component/gridInventory/gridInventory.component';
import { FilterPipe } from './component/gridInventory/table-filter.pipe';
import { CoreRoutingModule } from './core-routing.module';
import { GridColumnWidthPipe } from './directives/pipe/grid-column-width.pipe';
import { PhonePipe } from './directives/pipe/phone.pipe';
import { TypeFilterPipe } from './directives/pipe/type-filter.pipe';
import { YesNoPipe } from './directives/pipe/yes-no.pipe';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    GridInventoryComponent,
    FilterPipe,
    GridColumnWidthPipe,
    PhonePipe,
    TypeFilterPipe,
    YesNoPipe,
    BreadcrumComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    // MatButtonToggleModule,
    // MatInputModule,
    FormsModule,
    MaterialModule,
    // MatPaginatorModule
  ],
  exports:[
    GridInventoryComponent,
    FilterPipe,
    GridColumnWidthPipe,
    PhonePipe,
    TypeFilterPipe,
    YesNoPipe,
    BreadcrumComponent,
    MaterialModule,
    // MatButtonToggleModule
  ]
})
export class CoreModule { }
