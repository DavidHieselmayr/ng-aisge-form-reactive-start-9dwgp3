import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from './person.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: Person = new Person();

  onSubmit(form: NgForm) {
    Object.assign(this.person, form.value);
    console.log(this.person);
  }
}
