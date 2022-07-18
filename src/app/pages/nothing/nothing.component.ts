import { Component, OnInit } from '@angular/core';
import {data as items} from '../../../assets/largeScreen/images'
@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html',
  styleUrls: ['./nothing.component.scss']
})
export class NothingComponent implements OnInit {

  public items = [...items];

  constructor() {
   }

  ngOnInit(): void {
  }

}


// parent component   