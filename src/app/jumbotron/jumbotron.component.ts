import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() imageLink = '';
  constructor() { }

  ngOnInit(): void {
  }

}
// Child Component

//NOTE: create a service that will serve images according to the screen size so you don't have to worry about repeating this over and over again for all the component.s