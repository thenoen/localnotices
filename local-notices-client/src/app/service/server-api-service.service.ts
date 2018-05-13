import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notice } from '../model/Notice';
import { ServerApiResponse } from '../model/ServerApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ServerApiServiceService {

  constructor(private http: HttpClient) { }

  createNewNotice() {
    this.http.get("/notice/list",  {responseType: 'text'})
      .subscribe(data => this.log(data),
        err => console.log(err));

    this.http.get<ServerApiResponse>("/notice/list")
    .subscribe(data => console.log(data));
  }

  private log(data: any) {
    console.log(data);
  }
}
