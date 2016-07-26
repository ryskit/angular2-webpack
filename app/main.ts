import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Request, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

interface Sample {
  name: string;
  age: number;
}

@Injectable()
class SampleService {

  constructor(private http: Http) {}

  fetch(): Observable<Sample> {
    return this.http.get("./data.json").map(res=>res.json() as Sample);
  }
}

@Component({
  selector: 'my-app',
  template: `
    <h3>Http Example</h3>
    <pre>{{ data | json }}</pre>
  `,
  providers: [SampleService]
})

export class MyApp {
  public data: Sample;

  constructor(private service: SampleService) {}

  ngOnInit() {
    this.service.fetch().subscribe(data => this.data = data);
  }
}

bootstrap(MyApp, [HTTP_PROVIDERS]);
