import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { FriendListComponent } from './friend-list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
    HeroDetailComponent,
    FriendListComponent,
    ROUTER_DIRECTIVES
  ]
})

export class AppComponent {
  title = "Tour of Heroes";

  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
