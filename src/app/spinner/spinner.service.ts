import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

   private isShow$:BehaviorSubject<boolean>;
   isActive:boolean=false;
  constructor() {
    this.isShow$=new BehaviorSubject<boolean>(false);
   }

   showSpinner(value:boolean){
      this.isActive=value;
      this.isShow$.next(this.isActive);
   }

   get isShowSpinner$(){
      return this.isShow$.asObservable();
   }
}
