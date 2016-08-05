import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    HeroService
  ]
})

export class AppComponent {
  title = "Tour of Heroes";
}
