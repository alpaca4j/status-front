import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Status} from "../models/Status";
import {BehaviorSubject, Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  // backendUrl:string= 'http://localhost:8080/status?scope=team1';
  initialList: Status[] = []
  statusList = new BehaviorSubject( this.initialList);
  currentList= this.statusList.asObservable();

  backendUrl: string = '/api/statusInflux?scope=team1';

  constructor(private http: HttpClient) {
  }

  updateScope(scope: string){
    this.backendUrl = '/api/statusInflux?scope=' + scope;
    this.getStatuses(this.backendUrl).subscribe(statusList => {
      console.log(statusList)
      this.statusList.next(statusList)
    });
  }

  getStatuses(url:string ): Observable<Status[]> {
    return this.http.get<Status[]>(url).pipe(
      map(data => data
        .map(v => {
            v.checkDate = new Date(v.checkDate);
            return v;
          }
        )
      )
    )

  }
}
