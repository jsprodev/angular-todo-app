import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  firstName: string = 'Hashim';
  lastName: string = 'Khalid';
  age: number = 27;

  changeName(firstName: string, lastName: string):void {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  constructor() {  
    // console.log('Construvtor fired');
  }

  ngOnInit() {
    // console.log('OnInit fired')
    this.changeName('Harrison', 'Ford');
  }


}