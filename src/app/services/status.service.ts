import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Status} from "../models/Status";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  // backendUrl:string= 'http://localhost:8080/status?scope=test';
  backendUrl: string = '/api/status?scope=test';

  constructor(private http: HttpClient) {
  }

  getStatuses(): Observable<Status[]> {
    return this.http.get<Status[]>(this.backendUrl).pipe(
      map(data => data
        .map(v => {
          v.checkDate = new Date(v.checkDate);
          return v;
        })))

  }
}
