import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.hostUrl + '/token';
  }
  getToken(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(map(res => res as any || 0));
  }
}
