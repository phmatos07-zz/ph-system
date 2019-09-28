import { StorageTypeEnum } from './enum/storage-type.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly KEY_NAME = 'phSystem';

  setItem<T>(data: T, storageType = StorageTypeEnum.SESSION_STORAGE): void {

    if (data) {

      const dataJson = JSON.stringify(data);

      if (storageType === StorageTypeEnum.SESSION_STORAGE) {
        sessionStorage.setItem(this.KEY_NAME, dataJson);
        return;
      }
      localStorage.setItem(this.KEY_NAME, dataJson);
    }
  }

  getItem(storageType = StorageTypeEnum.SESSION_STORAGE): JSON {

    let dataJson = null;

    if (storageType === StorageTypeEnum.SESSION_STORAGE) {
      dataJson = sessionStorage.getItem(this.KEY_NAME);
    } else {
      dataJson = localStorage.getItem(this.KEY_NAME);
    }
    return dataJson ? JSON.parse(dataJson) : null;
  }

  removeItem(storageType = StorageTypeEnum.SESSION_STORAGE): void {

    if (storageType === StorageTypeEnum.SESSION_STORAGE) {
      sessionStorage.removeItem(this.KEY_NAME);
      return;
    }
    localStorage.removeItem(this.KEY_NAME);
  }

  clearStorage(): void {
    sessionStorage.clear();
  }
}
