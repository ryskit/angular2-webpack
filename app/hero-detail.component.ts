import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  goBack(saveHero: Hero = null) {
    this.close.emit(saveHero);
    if (this.navigated) { window.history.back(); }
  }
}
