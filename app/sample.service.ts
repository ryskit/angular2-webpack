import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Sample } from './sample';

@Injectable()
export class SampleService {

  constructor(private http: Http) {}

  fetch(): Observable<Sample> {
    return this.http.get("./data.json").map(res=>res.json() as Sample);
  }
}
