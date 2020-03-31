import { Component, OnInit } from '@angular/core';
import { ProxifyService, StorageService } from '@ph/core-utils';

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
