import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UdcFilterSet } from '../model/UdcFilterSet';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseUrl = '';
  private baseUDCUrl = '';
  private params = new HttpParams();
  constructor(private http: HttpClient) {
    this.baseUrl = environment.hostUrl + '/DataManage';
    this.baseUDCUrl = environment.hostUrl + '/udc';
   }

   getAllWithoutParams<T>(apid: number): Observable<T[]> {
    return this.http.get(this.baseUrl + '/' + apid).pipe(map(res => res as T[] | any));
  }

  getAll<T>(apid: number, params: string): Observable<T[]> {
    return this.http.get(this.baseUrl + '/' + apid + '?search=' + params).pipe(map(res => res as T[] | any));
  }
  getAllData<T>(apid: number): Observable<T[]> {
    return this.http.get(this.baseUrl + '/' + apid).pipe(map(res => res as T[] | any));
  }
  getAllAddress<T>(apid: number, params: string): Observable<T[]> {
    return this.http.get(this.baseUrl + '/' + apid + '?search=' + params + '?search=' + params).pipe(map(res => res as T[] | any));
  }
  

  getUDCAll<T>(apid: number, params: string): Observable<T[]> {
    return this.http.get(this.baseUDCUrl + '/' + apid + '?search=' + params).pipe(map(res => res as T[] | any));
  }
  
  getAllRecords<T>(apid: number): Observable<T[]> {
    return this.http.get(this.baseUrl + '/' + apid).pipe(map(res => res as T[] | any));
  }

  getUDCAllRecords<T>(apid: number): Observable<T> {
    return this.http.get(this.baseUDCUrl + '/' + apid).pipe(map(res => res as T | any));
  }

  get<T>(apid: number, params: string): Observable<T[]> {
    return this.http.get(this.baseUrl + '/' + apid + '?search=' + params).pipe(map(res => res as T[] | any));
  }
  getUDC<T>(apid: number, params: string): Observable<T[]> {
    return this.http.get(this.baseUDCUrl + '/' + apid + '?search=' + params).pipe(map(res => res as T[] | any));
  }

  post<T>(apid: number, value: T) {
    return this.http.post(this.baseUrl + '/' + apid, value).pipe(map(res => res as boolean | any)); // Successfull Insert response=TRUE,Else=False
  }
  postBulk<T>(apid: number, value: T) {
    return this.http.post(this.baseUrl + '/bulk/' + apid, value).pipe(map(res => res as boolean | any)); // Successfull Insert response=TRUE,Else=False
  }

  update<T>(apid: number, value: T, params: string) {
    this.params = new HttpParams();
    this.params.set('search', params);
    return this.http.put(this.baseUrl + '/' + apid + '?search=' + params, value).pipe(map(res => res as boolean| any)); // Successfull Update response=TRUE,Else=False
  }
  updateUDC<T>(apid: number, value: T, params: string) {
    this.params = new HttpParams();
    this.params.set('search', params);
    return this.http.put(this.baseUDCUrl + '/' + apid + '?search=' + params, value).pipe(map(res => res as boolean| any)); // Successfull Update response=TRUE,Else=False
  }

  delete(apid: number, params: string): Observable<any> {
    // this.params=new HttpParams();
    // this.params.set("search",params);
    return this.http.delete(this.baseUrl + '/' + apid + '?search=' + params).pipe(map(res => res as  boolean| any));
  }

  getAllUdcDataSpecificField<T>(apid: number, fieldSet: UdcFilterSet ): Observable<T[]> {
    return this.http.post(this.baseUDCUrl + '/' + apid , fieldSet).pipe(map(res => res as T[] | any));
  }

  getAllDataManageDataSpecificField<T>(apid: number, fieldSet: UdcFilterSet, params: string): Observable<T[]> {
    return this.http.post(this.baseUrl + '/filter/' + apid + '?search=' + params, fieldSet).pipe(map(res => res as T[] | any));
  }
  
  
}
