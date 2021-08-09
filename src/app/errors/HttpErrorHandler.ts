import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';
import { Router } from '@angular/router';
//import { LoginService } from '../login-form/login.service';
import { TokenService } from '../core/service/token.service';
@Injectable()
export class HttpErrorHandler implements HttpInterceptor {
    constructor(private toast: ToastrService,private tokenService:TokenService, private spinner: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: any) => {

                if (this.spinner.isActive)
                    this.spinner.showSpinner(false);
                console.log(err);
                if (err.status == 401) {
                    localStorage.removeItem("token")
                    // this.refreshTokenInProgress=true;
                    // 401 errors are most likely going to be because we have an expired token that we need to refresh.
                    // if (this.refreshTokenInProgress) {
                      // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
                      // which means the new token is ready and we can retry the request again
                      return this.refreshAccessToken().pipe(
                        // filter(result => result !== null),
                        take(1),
                        switchMap((t) => {
                            return next.handle(this.addToken(request, t.token_type + ' ' + t.access_token))
                        }));
                }
                else if (err.status == 403) {
                    if (err.error.jwtKey != undefined && err.error.jwtKey != null && err.error.jwtKey != '')
                        localStorage.setItem("jwtKey", err.error.jwtKey);
                        this.toast.error(err.error);
                    } else {
                    if (err.error.errors == undefined) this.toast.error("Something went wrong,Please try again later");
                    else this.toast.error(err.error);
                }
                // const error = err.error.message || err.statusText;

                return throwError(err);
            }))
    }
    private refreshAccessToken(): Observable<any> {
        return this.tokenService.getToken();
     }
 
     private addToken(request: HttpRequest<any>, token: string) {
         const refreshToken = token;
         if (refreshToken) {
             localStorage.setItem('token', token);
             return request = request.clone({
                 headers: new HttpHeaders({ Authorization: refreshToken, clientid: 'rvtAgent', 'Access-Control-Allow-Origin': '*' })
             });
         }
     }
    // getHttpMessage(err: HttpErrorResponse):string{
    //    switch(err.status){
    //        case : 400
    //    }
    // }
}

