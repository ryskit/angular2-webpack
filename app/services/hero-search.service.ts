import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Hero }           from '../hero';

@Injectable()
export class HeroSearchService {
  heroesUrl = "data.json";

  constructor(private http: Http) {}

  search(term: string) {
    // return this.http
    //            .get(`/heroes/?name=${term}`)
    //            .map((r: Response) => r.json() as Hero[]);
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(res => {
                  var data = res.json() as Hero[];
                  var heroes: Array<Hero> = new Array();
                  var reg = new RegExp(term);
                  for (let hero of data) {
                    if (hero.name.match(reg)) {
                      heroes.push(hero);
                    }
                  }

                  return heroes;
                });
  }

  retrieve(keyword: string) {
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(res => {
                  let data = res.json() as Hero[];
                  if (keyword === null) { keyword = ".*"; }
                  console.log(keyword);
                  var heroes: Array<Hero> = new Array();
                  for (let hero of data) {
                    if (hero.name.match(new RegExp(keyword))) {
                      heroes.push(hero);
                    }
                  }
                  return heroes;
                });
  }

}
