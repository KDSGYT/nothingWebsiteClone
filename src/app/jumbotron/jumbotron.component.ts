import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnChanges {

  @Input() imageLink = '';
  @Input() preheading = '';
  @Input() heading = '';
  @Input() shortText = '';
  @Input() link1 = {
    linkName: '',
    link: ''
  };
  @Input() overlayText = '';
  @Input() learnMore = '';
  constructor() {
  }

  ngOnChanges(): void {
    console.log(this.preheading)
  }

}
// Child Component

//NOTE: create a service that will serve images according to the screen size so you don't have to worry about repeating this over and over again for all the component.s