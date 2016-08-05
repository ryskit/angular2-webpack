import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-hero',
  templateUrl: 'app/heroes.component.html',
  directives: []
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
