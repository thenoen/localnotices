import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

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

  constructor() {
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


  onKey(event) {
    console.log(event);
    console.log(this.validFromDate);
    console.log(this.validFromTime);
    console.log(this.validFromTime.hour);
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
  }
}
