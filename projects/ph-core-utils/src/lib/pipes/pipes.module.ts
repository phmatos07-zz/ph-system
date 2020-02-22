import { NgModule } from '@angular/core';
import { TreatNullModule } from './treat-null/treat-null.module';

@NgModule({
  imports: [
    TreatNullModule
  ],
  exports: [
    TreatNullModule
  ]
})
export class PipesModule { }
