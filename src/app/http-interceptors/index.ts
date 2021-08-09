
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './header-interceptor';

export const httpInterceptProviders = [
    { provide: HTTP_INTERCEPTORS , useClass: MyInterceptor, multi: true}
]