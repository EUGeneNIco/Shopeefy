import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastrService: ToastrService
  ) { }

  notifySuccess(message: string) {
    this.toastrService.success(message);
  }

  notifyError(errMessage: string) {
    this.toastrService.error(errMessage, 'Ooops! Something went wrong');
  }
}
