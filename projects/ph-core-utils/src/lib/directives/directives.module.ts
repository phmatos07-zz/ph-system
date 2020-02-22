import { NgModule } from '@angular/core';
import { InputMaskModule } from './input-mask/input-mask.module';

@NgModule({
  imports: [
    InputMaskModule,
  ],
  exports: [
    InputMaskModule
  ]
})
export class DirectivesModule { }
