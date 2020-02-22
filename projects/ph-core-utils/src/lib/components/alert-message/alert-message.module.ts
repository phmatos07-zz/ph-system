import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageComponent } from './alert-message.component';

@NgModule({
  declarations: [
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertMessageComponent
  ]
})
export class AlertMessageModule { }
