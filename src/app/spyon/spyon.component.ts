import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spyon',
  templateUrl: './spyon.component.html',
  styleUrls: ['./spyon.component.scss']
})
export class SpyonComponent implements OnInit {
  logged!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  isLogged() {
    this.logged = true;
  }

}
