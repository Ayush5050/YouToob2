import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {


  isShow$:Observable<boolean>= new BehaviorSubject(false);
  constructor(private spinnerService:SpinnerService) {
    this.isShow$= this.spinnerService.isShowSpinner$;
   }

  ngOnInit() {}

}
