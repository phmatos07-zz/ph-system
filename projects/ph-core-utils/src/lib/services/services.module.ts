import { NgModule } from '@angular/core';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { ProxifyService } from './proxify/proxify.service';
import { StorageService } from './storage/storage.service';

@NgModule({
  providers: [
    ErrorHandlerModule,
    ProxifyService,
    StorageService
  ]
})
export class ServicesModule { }
