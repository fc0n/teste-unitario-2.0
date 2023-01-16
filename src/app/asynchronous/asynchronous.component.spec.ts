import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AsynchronousComponent } from './asynchronous.component';

import { HttpService } from '../service/http.service';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make request to get list of users', () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",

        "id": 1
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ];
    spyOn(http, 'getUsers').and.returnValue(of(response));
    component.getUsers();
    expect(component.data).toEqual(response);
  })

  it('should make call to get list of users with promise', async() => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",
        "id": 1
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ]
    spyOn(http, 'getUsersWithPromise').and.returnValue(Promise.resolve(response));
    await component.getUsersWithPromise();
    expect(component.dataPromise).toEqual(response);
  });
});
