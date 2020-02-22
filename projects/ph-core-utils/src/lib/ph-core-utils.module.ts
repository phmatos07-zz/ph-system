import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    ServicesModule
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class PhCoreUtilsModule { }
