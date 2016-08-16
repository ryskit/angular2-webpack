import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-edit',
  templateUrl: 'app/hero-edit.component.html',
})

export class HeroEditComponent implements OnInit {
  hero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        let id = +params['id'];
        this.heroService.getHero(id)
          .then(hero => this.hero = hero)
      }
    });
  }

  save() {
    this.heroService.save(this.hero);
    this.goBack();
  }

  delete() {
    this.heroService.delete(this.hero);
    this.router.navigate(['/heroes']);
  }

  goBack() {
    this.router.navigate(['/detail', this.hero.id]);
  }
}
