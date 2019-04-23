import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-formvalidate',
  templateUrl: './formvalidate.component.html',
  styleUrls: ['./formvalidate.component.css']
})
export class FormvalidateComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(f: NgForm) { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  // TODO: Remove this when we're done
  // public diagnostic() { return JSON.stringify(this.model); }
  get diagnostic() { return JSON.stringify(this.model); }


}
