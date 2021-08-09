import { TokenService } from './core/service/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  isLoad: boolean = false;
  isOpen: boolean = false;
  role_id = 1;
  fixSectionFlag: boolean=false;
  toggleClick: boolean=false;
  constructor(private tokenservice: TokenService) {
    // this.isLogedIn$ = loginService.isLoggedIn;
    // this.loginUser=loginService.getUserDetails();
  }
  
  ngOnInit(){
  }
  
  setSect(){
    this.fixSectionFlag=!this.fixSectionFlag;
    this.toggleClick=!this.toggleClick;
  }

}
