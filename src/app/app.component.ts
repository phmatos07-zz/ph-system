import { Component, OnInit } from '@angular/core';
import { ProxifyService } from './../../projects/ph-core-utils/src/lib/services/proxify/proxify.service';
import { StorageService } from './../../projects/ph-core-utils/src/lib/services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private proxifyService: ProxifyService
  ) { }

  ngOnInit(): void {
    this.initEventListener();
  }

  private initEventListener(): void {
  }
}
