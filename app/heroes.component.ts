import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './services/hero.service';
import { HeroSearchService } from './services/hero-search.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { PaginatePipe, PaginationControlsCmp, PaginationService } from 'ng2-pagination';

@Component({
  selector: 'my-hero',
  templateUrl: 'app/heroes.component.html',
  styleUrls: [
    'app/heroes.component.css',
  ],
  directives: [
    HeroDetailComponent,
    HeroSearchComponent,
    PaginationControlsCmp
  ],
  pipes: [
    PaginatePipe
  ],
  providers: [
    PaginationService,
    HeroSearchService
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  error: any;

  itemsPerPage: number = 3;
  currentPage: number  = 1;
  private _maxPage: number;
  keyword: string;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private heroSearchService: HeroSearchService
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







  onSubmit(form: any){
    this.heroSearchService.retrieve(form.keyword).then(heroes => this.heroes = heroes);
  }
}
