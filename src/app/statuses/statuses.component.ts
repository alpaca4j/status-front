import {Component, OnInit} from '@angular/core';
import {Status} from "../models/Status";
import {StatusService} from "../services/status.service";

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit {
  statusList: Status[];

  constructor(private statusService:StatusService) {
  }

  ngOnInit(): void {
    // this.statusService.getStatuses().subscribe(statusList => {
    //   this.statusList=statusList
    // })
    this.statusService.currentList.subscribe(statusList => {
      this.statusList = statusList
    })
    this.statusService.updateScope("team1")
  }

}
