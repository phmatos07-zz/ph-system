import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';

@NgModule({
  declarations: [
    AlertMessageComponent,
    HorizontalTimelineComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertMessageComponent,
    HorizontalTimelineComponent
  ]
})
export class ComponentsModule { }
