import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//虽然是root， 但Angular is smart enough to bundle service in the lazy loaded bundle if it is only injected in the lazy components / services. 
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
