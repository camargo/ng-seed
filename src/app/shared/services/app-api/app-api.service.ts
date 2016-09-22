import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'; // Unit tests were complaining without this.

@Injectable()
export class AppApiService {

  constructor(public http: Http) {}

  getIpAddress() {
    let url = 'http://ip.jsontest.com/';

    return this.http.get(url)
                    .map((res: any) => res.json());
  }
}
