import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'hero-add',
  templateUrl: 'app/hero-add.component.html'
})

export class HeroAddComponent implements OnInit {
  hero: Hero;
  heroNum: number;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.hero = new Hero();
    this.heroService.getHeroes().then(heroes => {
      this.hero.id = +heroes.length > 0 ? +heroes.length + 1 : 1;
    });
  }

  save() {
    this.heroService.save(this.hero)
      .then(hero => this.hero = hero);
    this.goBack(this.hero);
  }

  goBack(savedHero: Hero = null) {
    if (savedHero) {
      this.router.navigate(['/detail', savedHero.id]);
    }
    this.router.navigate(['/heroes']);
  }
}
