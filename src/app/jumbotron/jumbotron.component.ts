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

/**
 * Split the heading into two words manually to fix the space manually as per requirement
 * @param preheading string
 * @returns string
 */
/**
 * steps:
 *  1.Split the heading where the spaces are.
 * 
 * use index of to create a substr when the first space occurs.
 */
  splitPreheading(preheading: string): string[] {
    return [preheading.split(" ")[0], preheading.substring(preheading.indexOf(" "))];
  }

  ngOnChanges(): void {
    console.log(this.preheading)
  }

}

//NOTE: create a service that will serve images according to the screen size so you don't have to worry about repeating this over and over again for all the component.s