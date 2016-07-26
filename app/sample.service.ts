import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/observable';
import { Sample } from './sample';

@Injectable()
export class SampleService {

  public sample: Sample[];

  constructor(private http: Http) {}

  fetch(): Observable<Sample> {
    return this.http.get("./data.json").map(res=>res.json() as Sample);
  }
}
