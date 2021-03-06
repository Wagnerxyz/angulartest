import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { CanvaspdfRoutingModule } from './canvaspdf-routing.module';
import { CanvaspdfComponent } from './canvaspdf.component';

@NgModule({
  declarations: [CanvaspdfComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    CanvaspdfRoutingModule
  ]
})
export class CanvaspdfModule { }
