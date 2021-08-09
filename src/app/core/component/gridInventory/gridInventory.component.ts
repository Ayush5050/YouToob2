import { KeyValue } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { GridData } from '../../model/GridData';

@Component({
  selector: 'app-grid-inventory',
  templateUrl: './gridInventory.component.html',
  styleUrls: ['./gridInventory.component.scss'],
})
export class GridInventoryComponent implements OnInit {
  searchText: string = '';
  isSort: boolean = false;
  @Input() isDownloadType: boolean;
  @Input() data: GridData;
  // @Input() data$: BehaviorSubject<any>=new BehaviorSubject({});
  @Output() SortFun = new EventEmitter<number>();
  @Output() archive = new EventEmitter<number>();
  @Output() archiveRow = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() cancelEvent = new EventEmitter<number>();
  @Output() revokeCancelEvent = new EventEmitter<number>();
  @Output() update = new EventEmitter<number>();
  @Output() create = new EventEmitter<boolean>();
  @Output() activeList = new EventEmitter<boolean>();
  @Output() downloadRowData = new EventEmitter<any>();

  @Output() archiveList = new EventEmitter<boolean>();

  // @Output() updateTimeTrack = new EventEmitter<number>();
  @Output() copyObj = new EventEmitter<number>();
  @Output() viewObj = new EventEmitter<number>();
  @Output() viewTrackingObj = new EventEmitter<any>();
  @Output() scndViewTrackingObj = new EventEmitter<any>();
  @Output() emitImage = new EventEmitter<any>();
  @Output() emitEmail = new EventEmitter<number>();
  @Output() checked = new EventEmitter<any>();
  @Input() showArch: boolean = false;
  @Input() showSort: boolean;
  @Input() showAction: boolean = true;
  @Input() viewDetail: boolean = false;
  @Input() showView: boolean = false;
  @Input() showViewColumn: string = '';
  @Input() isDeleteType: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() showChecked: boolean = false;
  @Input() showIcon: boolean = false;
  @Input() showHeader: boolean = true;
  @Input() isSortIconVis: boolean = false;
  @Input() isMgmt: boolean = false;
  @Input() showEmail: boolean = false;
  @Input() userTracking: boolean = false;
  @Output() restore = new EventEmitter<number>();
  isManager: boolean = false;
  today: Date;
  show_info: boolean = false;
  rowslice: any[];
  row_length: number;
  baseUrl: string = '';
  selectedHeader: string = '';
  phoneFormat: number = 0;
  GridView: number = 1;
  partnersTypeOptions = ['Active', 'Archived'];
  selectedOption = 'Active';
  originalorder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };
  constructor(private router: Router) {
    this.isManager = localStorage.getItem('isManager') == 'true' ? true : false;
    this.phoneFormat = Number(localStorage.getItem('phoneFormat'));
    this.today = new Date();
  }
  ngOnInit() {
    // this.baseUrl = environment.hostUrl + "/";
  }
  // ngAfterContentChecked() {
  //   ("===>", this.data);

  // }
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    this.row_length = this.data.rows.length;

    this.rowslice = this.data.rows.slice(0, 10);

    this.sortLeaves();
  }
  sortLeaves() {
    if (this.showSort) {
      this.sortData(this.isSort);
    }
  }
  getActive() {
    this.activeList.emit();
  }

  getArchieved() {
    this.archiveList.emit();
  }

  toggleSelected(para?) {
    console.log(para);
    if (para == 'Active') {
      this.activeList.emit();
    } else if (para == 'Archived') {
      this.archiveList.emit();
    }
    // this.isActive = para;
    // this.closeDetail()
    // this.refreshList();
    // this.dataSource.filter =  JSON.stringify(this.selectedTags);
    // this.currentList = this.dataSource.filteredData;
  }

  ngAfterViewInit() {}
  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };
  archiveData(leave) {
    this.archive.emit(leave);
    //this.searchText = '';
  }
  archiveRowData(leave) {
    this.archiveRow.emit(leave);
  }
  del(id: number) {
    this.delete.emit(id);
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

  view(id: number) {
    this.viewObj.emit(id);
  }
  viewRow(row) {
    this.viewTrackingObj.emit(row);
  }
  scndViewRow(row) {
    this.scndViewTrackingObj.emit(row);
  }

  imageViewRow(row) {
    this.emitImage.emit(row);
  }

  edit(id: number) {
    this.update.emit(id);
  }
  createForm() {
    this.create.emit();
  }
  dup(id: number) {
    // this.toast.success('Successfully duplicated. Please make changes then save.');
    this.copyObj.emit(id);
  }
  rest(id: number) {
    this.restore.emit(id);
    // this.searchText = '';
  }
  filterByName(list, field, ValueField, value) {
    let obj;
    let returnValue = 'N/A';
    if (list) {
      if (ValueField) {
        list.forEach((element) => {
          if (
            element.FieldName === field &&
            element.ValueField === ValueField
          ) {
            obj = element;
          }
        });
      } else {
        list.forEach((element) => {
          if (element.FieldName === field) {
            obj = element;
          }
        });
      }
      if (obj.data) {
        let tempStr: string[] = obj.ValueField.split(':!!:');
        obj.data.forEach((element) => {
          if (element && element[obj.IdField] == value) {
            returnValue = '';
            tempStr.forEach((v) => {
              returnValue += ' ' + element[v];
            });
            returnValue = returnValue.trim();
          }
        });
      }
    }
    return returnValue;
  }
  approveLeave() {
    this.router.navigate(['/request']);
  }

  cancelApprovedLeave(leave) {
    this.cancelEvent.emit(leave);
  }

  revokeCancellarion(leave) {
    this.revokeCancelEvent.emit(leave);
  }

  sentEmail(id) {
    this.emitEmail.emit(id);
  }

  onPaginateChange(event) {
    console.log(event);
    const startindex = event.pageIndex * event.pageSize;
    let endindex = startindex + event.pageSize;
    if (endindex > this.data.rows.length) endindex = this.data.rows.length;
    this.rowslice = this.data.rows.slice(startindex, endindex);
  }

  //data on grid was not refreshing after archive, so below method needed to refresh data
  archiveACK(id) {
    this.data.rows = this.data.rows.filter((data) => data.id != id);
  }

  isHeaderSort: boolean = false;
  isActiveSortonColumn: string = '';
  SortByColumn(header) {
    if (
      this.isActiveSortonColumn == '' ||
      this.isActiveSortonColumn != header.FieldName
    ) {
      this.isHeaderSort = true;
      this.isActiveSortonColumn = header.FieldName;
    } else if (this.isActiveSortonColumn == header.FieldName) {
      this.isHeaderSort = !this.isHeaderSort;
    }

    if (this.isHeaderSort) {
      this.sortDescendingByColumn(header.FieldName, header.Type);
    } else {
      this.sortAscendingByColumn(header.FieldName, header.Type);
    }
  }
  value_changed(event, row_data) {
    this.checked.emit({ event, row_data });
  }

  sortAscendingByColumn(columnName, type) {
    this.selectedHeader = columnName;
    return this.data.rows.sort((a, b) => {
      if (
        (a[columnName] != null && typeof a[columnName] == 'number') ||
        (b[columnName] != null && typeof b[columnName] == 'number')
      ) {
        return a[columnName] - b[columnName];
      } else return String(a[columnName]).localeCompare(String(b[columnName]));
    });
  }

  sortDescendingByColumn(columnName, type) {
    this.selectedHeader = columnName;
    return this.data.rows.sort((a, b) => {
      if (
        (a[columnName] != null && typeof a[columnName] == 'number') ||
        (b[columnName] != null && typeof b[columnName] == 'number')
      ) {
        return b[columnName] - a[columnName];
      } else return String(b[columnName]).localeCompare(String(a[columnName]));
    });
  }
  downloadData(row: any) {
    return this.downloadRowData.emit(row);
  }
}
