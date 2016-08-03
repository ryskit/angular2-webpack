import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { FriendListComponent } from './friend-list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    HeroDetailComponent,
    FriendListComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [
    HeroService
  ]
})

export class AppComponent {
  title = "Tour of Heroes";

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
