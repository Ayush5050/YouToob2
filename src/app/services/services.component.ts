import { Component, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridData } from '../core/model/GridData';
//import { DarModel } from '../dar/components/darmodel';
import { Song } from './song/song';

import { SongService } from './song/song.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  songs: Song[];
  songSelected: Song;
  yearSelected: number;
  toto = 'JGwWNGJdvx8';
  //darData: DarModel[];
  //inventoryList: DarModel[] = [];
  data: GridData;
  data$: BehaviorSubject<GridData> = new BehaviorSubject(new GridData());
  playlist = 
  [
    {id: 1,name: "2018 top 10"}, 
    {id: 2,name: "2017 top 10"},
    {id: 3,name: "2016 top 10"},
    {id: 4,name: "2015 top 10"}
  ];
  selectedOption = 1;
  rowslice: any[];
  row_length: number;
  isSort: boolean = false;
  showSort: boolean;
  selectedHeader: string = '';
  isMgmt: boolean = false;
  searchText: string = '';
  showHeader: boolean = true;




  constructor(private songService: SongService) {
    this.yearSelected = 1;
  }

  ngOnInit() {
    this.getSongs(this.yearSelected);
    // this.inventoryList=[
    //   {
    //   id:0,
    //   project_name:"EVM",
    //   facilitator:"Ayush",
    //   participants:"Ayush",
    //   brainstorming:true,
    //   nominal_group_technique:false,
    //   interview:false,
    //   pareto_analysis:false,
    //   date:"01/01/1999",
    //   isActive:false
    //   },
    //   {
    //   id:1,
    //   project_name:"CMMI",
    //   facilitator:"Ayush1",
    //   participants:"Ayush1",
    //   brainstorming:true,
    //   nominal_group_technique:false,
    //   interview:false,
    //   pareto_analysis:false,
    //   date:"01/01/1999",
    //   isActive:false
    //   },
    // ]
    //this.setInventoryGrid(this.inventoryList);
    this.ngOnChanges();
  }
  ngOnChanges() {
    this.row_length = this.data.rows.length;

    this.rowslice = this.data.rows.slice(0, 10);
    console.log(this.rowslice);

    this.sortLeaves();
  }
  sortLeaves() {
    if (this.showSort) {
      this.sortData(this.isSort);
    }
  }
  sortData(value: boolean) {
    this.isSort = value;
    this.selectedHeader = '';
    return this.data.rows.sort((a, b) => {
      // this is for user management page sort
      if (this.isMgmt) {
        if (!this.isSort)
          return a.FirstName.toString().localeCompare(b.FirstName.toString());
        if (this.isSort)
          return b.FirstName.toString().localeCompare(a.FirstName.toString());
      } else {
        if (!this.isSort)
          return a.Entry_Date.toString().localeCompare(b.Entry_Date.toString());
        if (this.isSort)
          return b.Entry_Date.toString().localeCompare(a.Entry_Date.toString());
      }
    });
  }
  setInventoryGrid(records: any[]) {
    console.log(records);

    const data: GridData = {
      rows: records,      
      isEmailView: true,
      header: [
        {
          FieldName: 'top',
          DisplayHead: 'Top',
          Type: 'label'
        },
        {
          FieldName: 'artist',
          DisplayHead: 'Artist',
          Type: 'label'
        },

        {
          FieldName: 'title',
          DisplayHead: 'Title',
          Type: 'label'
        },
        // {
        //   FieldName: 'short_statement',
        //   DisplayHead: 'Short statement',
        //   Type: 'label'
        // },
      ],
      reference: [], 
      primaryKey: 'id'
    };
    this.data = data;
    this.data$.next(this.data);
  }
  getSongs(year: number): void {
    this.songs = this.songService.getSongs(year);
    console.log(this.songs);
    this.setInventoryGrid(this.songs);

  }

  select(song: Song) {
    this.songSelected = song;
  }

  onChange($event: any) {
    
    this.yearSelected = $event.target.value;
    this.songs = this.songService.getSongs(this.yearSelected);
    this.songSelected = null;
    this.ngOnChanges();    
  }
  toggleSelected(para)
  {
    this.yearSelected = para;
    console.log(this.yearSelected);
    this.songs = this.songService.getSongs(this.yearSelected);
    this.songSelected = null;
    this.ngOnChanges();  
  }
}