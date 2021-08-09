import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseUrl: string = '';
  constructor(private http: HttpClient) {
    this.baseUrl = environment.hostUrl + '/Resource';
  }

  uploadFile(fileData: File): Observable<Object> {
    const fd = new FormData();
	    fd.append('file', fileData);
    return this.http.post(this.baseUrl, fd).pipe(map(res => res as Object | any))

  }
}
