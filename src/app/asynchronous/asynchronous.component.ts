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
  isLogged: any;
  name!: string;

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

  isAuthenticaded() {
    this.http.isAuthenticated().then(res => {
      this.isLogged = res;
    })
  }

  defineValue() {
    this.name = 'Danilo';
    setTimeout(() => {
      this.name = 'Jessica'
    }, 100)
  }

}
