import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreatNullPipe } from './treat-null.pipe';

@NgModule({
  declarations: [
    TreatNullPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TreatNullPipe
  ]
})
export class TreatNullModule { }
