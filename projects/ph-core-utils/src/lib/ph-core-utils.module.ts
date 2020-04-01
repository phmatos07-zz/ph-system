import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { ErrorHandlingModule } from './services/error-handling/error-handling.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    ServicesModule,
    ErrorHandlingModule
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class PhCoreUtilsModule { }
