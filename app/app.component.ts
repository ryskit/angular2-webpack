import { Component, Injectable } from '@angular/core';

import { Sample } from './sample';
import { SampleService } from './sample.service';
import {Http} from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

interface Friend {
  id: number,
  name: string,
  age: number,
  address: string
}

@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  providers: [SampleService]
})

export class AppComponent {
  public data: Sample;

  public status: any;
  public error: any;
  public friends:Friend[];

  constructor(private service: SampleService, private http: Http) {}

  getFriends(tf: boolean) {
      var url = (tf ? "/data.json" : "invalid-url");
      this.http.get(url)
                .subscribe(
                  res  => {
                    this.friends = res.json();
                    this.status = res.status;
                    this.error = "";
                  },
                  error => {
                    this.error = error.text().substr(287,100);
                    this.status = error.status;
                    this.friends = [];
                  });
  }

  ngOnInit() {
    this.service.fetch().subscribe(data => this.data = data);
  }
}
