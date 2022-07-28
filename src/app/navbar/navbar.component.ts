import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public previewFile: string = '';
  // change the source to the preview file according to the hovered item
  change(product: string): void {
    this.previewFile = `./assets/landingPageAssets/submenu/${product}.jpg`
  }

  // set the inital value of all the variables.
  ngOnInit(): void {
    this.previewFile = './assets/landingPageAssets/submenu/Header.jpg'
  }

}
