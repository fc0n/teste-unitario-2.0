import { Component, OnInit } from '@angular/core';

import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.http.getUsers().subscribe();
  }

  getUsersById(id: number) {
    this.http.getUsersById(id).subscribe();
  }

}
