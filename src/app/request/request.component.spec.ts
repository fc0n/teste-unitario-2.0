import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';

import {HttpClientTestingModule} from '@angular/common/http/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should list user by id getUsersById", () => {
    let spiedComponent  = spyOn(component, 'getUsersById').and.callThrough();
    const id = 1;
    component.getUsersById(id);
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

  it("should call getUsers", () => {
    let spiedComponent  = spyOn(component, 'getUsers').and.callThrough();
    component.getUsers();
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

  it("should create a user postUsers", () => {
    let spiedComponent  = spyOn(component, 'postUsers').and.callThrough();
    component.postUsers();
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

  it("should update a user putUsers", () => {
    let spiedComponent  = spyOn(component, 'putUsers').and.callThrough();
    const id = 1;
    component.putUsers(id);
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

  it("should delet a user deleteUser", () => {
    let spiedComponent  = spyOn(component, 'deleteUser').and.callThrough();
    const id = 1;
    component.deleteUser(id);
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

  it("should call getUsersWithHeaders", () => {
    let spiedComponent  = spyOn(component, 'getUsersWithHeaders').and.callThrough();
    component.getUsersWithHeaders();
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

});
