import { Component, OnInit, Input } from '@angular/core';
import {Status} from "../../models/Status";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input()status: Status;

  setClass(){
    switch (this.status.status) {
      case "up": {return "is-success"}
      case "down": {return "is-danger"}
      default: {return "is-info"}
    }
  }

  constructor() { }


  ngOnInit(): void {
  }

}
