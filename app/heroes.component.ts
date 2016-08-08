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
    HeroSearchComponent,
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  error: any;

  itemsPerPage: number = 3;
  currentPage: number  = 1;
  private _maxPage: number;

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





  range() {
    var count = 0;
    for (var h in this.heroes) {
      count++;
    }
    this._maxPage = Math.ceil(count / this.itemsPerPage);
    var ret: any = [];
    for (var i=1; i<=this._maxPage; i++) {
      ret.push(i);
    }
    return ret;
  };
  setPage(n: number) {
    this.currentPage = n;
  };
  prevPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
    }
  };
  nextPage() {
    if (this.currentPage < this._maxPage) {
      ++this.currentPage;
    }
  };
  prevPageDisabled() {
    return this.currentPage === 1 ? "disabled" : "";
  };

  nextPageDisabled() {
    return this.currentPage === this._maxPage ? "disabled" : "";
  };
}
