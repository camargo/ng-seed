import { Component, OnInit } from '@angular/core';

import { AppApiService } from './shared';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Hello, App!';
  public ip: string = '';

  constructor(public appApiService: AppApiService) {}

  ngOnInit() {
    this.appApiService.getIpAddress().subscribe(
      (res: any) => {
        this.ip = res.ip;
      }
    );
  }
}
