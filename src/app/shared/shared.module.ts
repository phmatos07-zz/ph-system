import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Validator } from 'class-validator';
import { TimelineComponent } from './components/timeline.components';

@NgModule({
  declarations: [
    TimelineComponent
    ],
  imports: [],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TimelineComponent
  ],
  providers: [
    Validator
  ]
})
export class SharedModule { }