import { NgModule } from '@angular/core';
import { AlertMessageModule } from './alert-message/alert-message.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { HorizontalTimelineModule } from './horizontal-timeline/horizontal-timeline.module';

@NgModule({
  imports: [
    AlertMessageModule,
    AutocompleteModule,
    HorizontalTimelineModule
  ],
  exports: [
    AlertMessageModule,
    AutocompleteModule,
    HorizontalTimelineModule
  ]
})
export class ComponentsModule { }
