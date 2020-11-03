import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
// import { TourOfHeroesModule } from './tour-of-heroes.module'
import { Observable, of } from 'rxjs';
import * as faker from 'faker/locale/zh_CN'

//教程 https://medium.com/@amcdnl/mocking-with-angular-more-than-just-unit-testing-cbb7908c9fcc
//The in-memory web api library currently assumes that every collection has a primary key called id.

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //  faker.setLocale('zh_CN');

    // entities with string ids that look like numbers
    const stringers = [
      { id: '10', name: 'Bob String' },
      { id: '20', name: 'Jill String' }
    ];


    const heroes = [
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
    //根据faker.js多弄了几个对象进去
    let fakerResults = this.manyHosts();
    console.log("qw");
    // creates a "database" hash whose keys are collection names and whose values are arrays of collection objects to return or update. 
    //每个对象都是collection name，访问时 api/collectionname访问不同的集合
    return of({ heroes, fakerResults });
    // return { heroes };
  }
  oneHost() {
    return {
      id: faker.random.uuid(),
      active: faker.random.boolean(),
      hostname: faker.internet.domainName(),
      category: faker.random.arrayElement(['DOV', 'DDOS', 'DFS']),
      description: faker.lorem.sentence(),
      readyDate: faker.date.future(),
      domain: faker.internet.domainName(),
      name: faker.name.lastName()
    };
  };

  manyHosts() {
    let count = faker.random.number(100)
    const res = [];
    for (let i = 0; i < count; i++) {
      res.push(this.oneHost());
    }
    return res;
  };
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
