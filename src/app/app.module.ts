import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from './layout/layout.module';
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { GlobalErrorHandler } from './errors/GlobalErrorHandler';
import { HttpErrorHandler } from './errors/HttpErrorHandler';
import { httpInterceptProviders } from './http-interceptors/index';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule } from '@angular/material/table';
import { MainRightMenuComponent } from './main-layout/main-right-menu/main-right-menu.component';
import { MainFooterComponent } from './main-layout/main-footer/main-footer.component';
import { MainHeaderComponent } from './main-layout/main-header/main-header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainLeftMenuComponent } from './main-layout/main-left-menu/main-left-menu.component';


@NgModule({
  declarations: [
    AppComponent, 
    SpinnerComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainLeftMenuComponent,
    MainRightMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000
    }),
    // MaterialModule,
    CoreModule,
    HttpClientModule,
    LayoutModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [httpInterceptProviders,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandler, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
