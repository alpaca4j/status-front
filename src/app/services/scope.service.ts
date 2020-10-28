import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "../models/Tag"

@Injectable({
  providedIn: 'root'
})
export class ScopeService {

  backendUrl: string = '/api/tagInflux';

  constructor(private http: HttpClient) {
  }

  getTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(this.backendUrl)
  }
}
