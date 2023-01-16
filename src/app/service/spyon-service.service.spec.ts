import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpyonServiceService } from './spyon-service.service';

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;
  let htppTestingController: HttpTestingController;
  let url: any;
  const logger = jasmine.createSpy("log");
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonServiceService);
    htppTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000'
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', () => {
    const response = [
      {name: 'Jean', age: 30, email: 'jean.gabriel@gmail.com'},
      {name: 'Jose', age: 40, email: 'jose.silva@gmail.com'},
      {name: 'Maria', age: 22, email: 'maria.silva@gmail.com'},
    ]
    spyOn(service, 'getUsers').and.returnValue(of(response))
    service.getUsers().subscribe(res => {
      expect(res).toEqual(response);
    })
  });

  it('should create method with jasmine.createSpy', () => {
    logger('Loguei no sistema');
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema');
  });

  it('should create method with jasmine.createSpyObj', () => {
    status.name('Jean');
    status.email('jean.gabriel@gmail.com');
    status.age('30');
    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith('Jean');
    expect(status.email).toHaveBeenCalledWith('jean.gabriel@gmail.com');
    expect(status.age).toHaveBeenCalledWith('30');
  });

  it('should perform GET call to get users', () => {
    const response = [
      {
        "id": 1,
        "name": "Carlos",
        "email": "carlos@gmail.com",
        "age": 30
      },
      {
        "id": 2,
        "name": "Julia",
        "email": "julia@gmail.com",
        "age": 18
      },
      {
        "id": 3,
        "name": "Marina",
        "email": "marina@gmail.com",
        "age": 22
      }
    ];
    service.getUsers().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`);
    service.getUsers().subscribe(res => {
      expect(res).toBe(response)
    });
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
    request.flush(response);
  });
});