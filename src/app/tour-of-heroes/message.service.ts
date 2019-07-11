import { Injectable } from '@angular/core';
import { TourOfHeroesModule } from './tour-of-heroes.module'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  constructor() { }
}
