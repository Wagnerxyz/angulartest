import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../../hero';

@Component({
  selector: 'app-templateformvalidate',
  templateUrl: './templateformvalidate.component.html',
  styleUrls: ['./templateformvalidate.component.css']
})
export class TemplateFormValidateComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(form: NgForm) {
    //   console.log("Course Name is : " + form.value.courseName);
    // console.log("Course Desc is : " + form.value.courseDesc);
    // console.log("Course Amount is : " + form.value.courseAmount);  
  console.log(form.value);
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  // TODO: Remove this when we're done
  // public diagnostic() { return JSON.stringify(this.model); }
  get diagnostic() { return JSON.stringify(this.model); }


}
