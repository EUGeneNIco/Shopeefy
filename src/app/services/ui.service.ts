import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private spinner: NgxSpinnerService) { }

  block() {
    this.spinner.show();
  }

  unBlock() {
    this.spinner.hide();
  }
}
