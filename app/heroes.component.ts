import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './services/hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

@Component({
  selector: 'my-hero',
  templateUrl: 'app/heroes.component.html',
  styleUrls: [
    'app/heroes.component.css',
  ],
  directives: [
    HeroDetailComponent,
    HeroSearchComponent
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
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

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(hero: Hero = null) {
    if (hero === null) {
      return this.router.navigate(['/detail/add']);
    }
    return this.router.navigate(['/detail', hero.id]);
  }

}
