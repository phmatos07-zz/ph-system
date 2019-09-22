import { AppMaterialModule } from './app.material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Validator } from 'class-validator';

@NgModule({
  declarations: [
    HorizontalTimelineComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    HorizontalTimelineComponent
  ],
  providers: [
    Validator
  ]
})
export class SharedModule { }