import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  fixSectionFlag: boolean=false;
  profilePopup: boolean=false;
  emailPopup: boolean=false;
  notificationPopup: boolean=false;
  searchPopupview: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  setSect(){
    this.fixSectionFlag=!this.fixSectionFlag;
  }
  setprofilepopup(){
    this.profilePopup=!this.profilePopup;
  }
  setemailpopup(){
    this.emailPopup=!this.emailPopup;
  }
  setnotificationpopup(){
    this.notificationPopup=!this.notificationPopup;
  }
  setSearchOpen(){
    this.searchPopupview=true;
  }
  setSearchClose(){
    this.searchPopupview=false;
  }
}
