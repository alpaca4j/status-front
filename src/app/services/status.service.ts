import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Status} from "../models/Status";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  // backendUrl:string= 'http://localhost:8080/status?scope=test';
  backendUrl:string= '/api/status?scope=test';

  constructor(private http:HttpClient) {
  }

  getStatuses():Observable<Status[]> {
    return this.http.get<Status[]>(this.backendUrl)
  }
}
