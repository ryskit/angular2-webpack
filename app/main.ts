import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Http, Request, Response } from '@angular/http';

@Component({
  selector: "my-app",
  template: `
  <h3>Http example</h3>
  <button (click)="updateStatus();">Get data.json</button>
  <p>Status: {{ status }}</p>
  <pre>{{ body | json }}</pre>
  `
})

class MyApp {

  private status: number;
  private body: string;

  constructor(private http: Http) {}

  updateStatus() {
    this.http.request(new Request({
      method: "Get",
      url: "./data.json"
    })).subscribe((res: Response) => {
      this.status = res.status;
      this.body   = res.json();
    });
  }
}

bootstrap(MyApp, [HTTP_PROVIDERS]);
