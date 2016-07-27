import { Component, Injectable } from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import { FriendService } from './friend.service';
import { Friend } from './friend';

@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  providers: [FriendService]
})

export class AppComponent {
  public status: any;
  public error: any;
  public friends: Friend[];

  constructor(private friendService: FriendService, private http: Http) {}

  getFriends(tf: boolean) {
      var url = (tf ? "/data.json" : "invalid-url");
      this.friendService
          .getFriends(url)
          .then(friends => {
            this.friends = friends.json() as Friend[];
            this.status  = true;
          })
          .catch(error  => {
            this.error = error;
            this.status = false;
          });
  }

  ngOnInit() {

  }
}
