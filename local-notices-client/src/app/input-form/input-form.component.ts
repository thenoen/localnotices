import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";
import { ServerApiServiceService } from '../service/server-api-service.service';
import { Notice } from '../model/Notice';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  validFromDate: NgbDateStruct;
  validFromTime: NgbTimeStruct;

  validUntilDate: NgbDateStruct;
  validUntilTime: NgbTimeStruct;

  noticeTextInput: any;

  constructor(private serverApiService: ServerApiServiceService) {
    var d: Date = new Date();
    this.validFromTime = <NgbTimeStruct>{};
    this.validFromTime.hour = d.getHours();
    this.validFromTime.minute = d.getMinutes();

    this.validUntilTime = <NgbTimeStruct>{};
    this.validUntilTime.hour = d.getHours() + 1;
    this.validUntilTime.minute = d.getMinutes();
  }

  ngOnInit() {
  }

  onKey(inputValue: string) {
    console.log(inputValue);
  }

  logData() {
    var d: Date = new Date();
    d.setFullYear(this.validFromDate.year);
    d.setMonth(this.validFromDate.month);
    d.setHours(this.validFromTime.hour);
    d.setMinutes(this.validFromTime.minute);
    d.setSeconds(0);
    d.setMilliseconds(0);

    console.log(d);

    if (this.noticeTextInput == null) {
      this.noticeTextInput = "";
    }

    let notice: Notice = new Notice(
      this.noticeTextInput,
      this.createDateFromInput(this.validFromDate, this.validFromTime),
      this.createDateFromInput(this.validUntilDate, this.validUntilTime)
    );
    this.serverApiService.createNewNotice(notice);
  }

  private createDateFromInput(dateInput: NgbDateStruct, timeInput: NgbTimeStruct): Date {
    let d: Date = new Date();

    d.setFullYear(dateInput.year);
    d.setMonth(dateInput.month);
    d.setHours(timeInput.hour);
    d.setMinutes(timeInput.minute);
    d.setSeconds(0);
    d.setMilliseconds(0);

    return d;
  }
}
