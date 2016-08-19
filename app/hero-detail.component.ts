import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
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

  edit() {
    this.router.navigate(['/edit', this.hero.id]);
  }

  goBack() {
    this.router.navigate(['/heroes']);
  }
}
