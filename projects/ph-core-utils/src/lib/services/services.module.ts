import { NgModule } from '@angular/core';
import { ProxifyService } from './proxify/proxify.service';
import { StorageService } from './storage/storage.service';

@NgModule({
  providers: [
    ProxifyService,
    StorageService
  ]
})
export class ServicesModule { }
