import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public ReadPrivacyPolicy:boolean = false
  public ReceiveNothingMarketing:boolean = false
  constructor() { }

  readPolicy():void {this.ReadPrivacyPolicy = !this.ReadPrivacyPolicy}
  consentForMarketing():void {this.ReceiveNothingMarketing = !this.ReceiveNothingMarketing}
  
  ngOnInit(): void {
    // this.ReadPrivacyPolicy = true;
  }

}
