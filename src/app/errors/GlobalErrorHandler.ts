import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../spinner/spinner.service';


@Injectable()

export class GlobalErrorHandler implements ErrorHandler {

    constructor(private spinnerService: SpinnerService) { }

    handleError(error: any) {
        //console.log(`Request URL: ${this.router.url}`);
        if (error instanceof HttpErrorResponse) {
            console.log('Backend return status code: ', error.status);
            console.log('Response Body: ', error.message);
        } else {
            // this.toastr.error("An error occured, please try again");
            console.log('An Error occured: ', error.message);
        }
        if (this.spinnerService.isActive) this.spinnerService.showSpinner(false);
    }
}