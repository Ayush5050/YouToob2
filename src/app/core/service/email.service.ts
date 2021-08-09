import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmailMessage } from '../model/EmailModel';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl: string = '';
  constructor(private http: HttpClient) {
    this.baseUrl = environment.hostUrl + "/email/send/" + environment.api.email;
  }

  sendEmail(body: EmailMessage): Observable<boolean> {

    return this.http.post(this.baseUrl, body).pipe(map(res => res as boolean | any));
  }
}
