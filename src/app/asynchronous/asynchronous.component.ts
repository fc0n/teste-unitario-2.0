import { Component, OnInit } from '@angular/core';

import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.scss']
})
export class AsynchronousComponent implements OnInit {
  data: any;
  dataPromise: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.http.getUsers().subscribe(res => {
      this.data = res;
    })
  }

  getUsersWithPromise() {
    this.http.getUsersWithPromise().then(res => {
      this.dataPromise = res;
    })
  }

}
