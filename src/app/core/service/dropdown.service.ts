import { ProjectModel } from './../model/DropDownModel';
import { APIService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

 
  constructor(private apiService: APIService) {
  }
  getProjectAll(): Observable<any[]> {
    const apid: number = environment.api.Project_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getCategoryAll(): Observable<any[]> {
    const apid: number = environment.api.Category_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getLessonAll(): Observable<any[]> {
    const apid: number = environment.api.Lesson_Type_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getOwnerAll(): Observable<any[]> {
    const apid: number = environment.api.Owner_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getProcessAll(): Observable<any[]> {
    const apid: number = environment.api.Process_Type_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getRiskAll(): Observable<any[]> {
    const apid: number = environment.api.Risk_Type_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getSprintAll(): Observable<any[]> {
    const apid: number = environment.api.Sprint_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  getStatusAll(): Observable<any[]> {
    const apid: number = environment.api.Status_Master;
    return this.apiService.getAll<any>(apid, '').pipe(map(v=>v as any[] | any));
  }

  
}
