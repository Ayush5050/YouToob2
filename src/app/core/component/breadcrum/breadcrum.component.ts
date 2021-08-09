import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumb } from './BreadCrumb';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit {

  @Input() currentPage:string='';
  @Input() breadCrumbList:BreadCrumb[]=[];
  constructor() { }

  ngOnInit() {
  }

}
