import { Component, Injectable } from '@angular/core';

import { Sample } from './sample';
import { SampleService } from './sample.service';

@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  providers: [SampleService]
})

export class AppComponent {
  public data: Sample;

  constructor(private service: SampleService) {}

  ngOnInit() {
    this.service.fetch().subscribe(data => this.data = data);
  }
}
