import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture-detect-change',
  templateUrl: './fixture-detect-change.component.html',
  styleUrls: ['./fixture-detect-change.component.scss']
})
export class FixtureDetectChangeComponent implements OnInit {
  title = "Usando fixture.detectChange()" ;
  constructor() { }

  ngOnInit(): void {
  }

}
