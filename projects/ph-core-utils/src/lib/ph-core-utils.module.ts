import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    ComponentsModule,
    DirectivesModule,
    ServicesModule
  ],
  exports: [
    ComponentsModule,
    DirectivesModule
  ]
})
export class PhCoreUtilsModule { }
