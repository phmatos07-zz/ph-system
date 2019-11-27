import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputMaskDirective } from './input-mask/input-mask.directive';

@NgModule({
  declarations: [
    InputMaskDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputMaskDirective
  ]
})
export class DirectivesModule { }
