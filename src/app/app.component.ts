import { Component, OnInit } from '@angular/core';
import { ProxifyService } from './../../projects/ph-core-utils/src/lib/services/proxify/proxify.service';
import { StorageTypeEnum } from './../../projects/ph-core-utils/src/lib/services/storage/enum/storage-type.enum';
import { StorageService } from './../../projects/ph-core-utils/src/lib/services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  objeto = {};

  constructor(
    private storageService: StorageService,
    private proxifyService: ProxifyService
  ) { }

  ngOnInit(): void {
    this.initEventListener();

    setTimeout(() => {
      this.storageService.clearStorage();
    }, 5000);
  }

  private initEventListener(): void {

    this.storageService.keyName = 'teste';
    this.objeto = {
      nome: 'phelipe',
      idade: 31
    };
    this.storageService.setItem(this.objeto, StorageTypeEnum.SESSION_STORAGE);
  }

  get nome(): string {
    const sessionStorage = this.storageService.getItem(StorageTypeEnum.SESSION_STORAGE);
    return this.proxifyService.proxy<string>(sessionStorage, 'nome');
  }

  get idade(): string {
    const sessionStorage = this.storageService.getItem(StorageTypeEnum.SESSION_STORAGE);
    return this.proxifyService.proxy<string>(sessionStorage, 'idade');
  }
}
