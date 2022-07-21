import { Component, OnInit } from '@angular/core';
import { LandingPagedataService, LandingPagedataServiceType } from 'src/app/services/landing-pagedata/landing-pagedata.service';

@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html',
  styleUrls: ['./nothing.component.scss']
})
export class NothingComponent implements OnInit {

  public items: Array<LandingPagedataServiceType>;


  constructor(private DataService: LandingPagedataService) {
    this.items = this.DataService.getLandingPageData();
  }

  ngOnInit(): void {
    // 
  }

}


// parent component   