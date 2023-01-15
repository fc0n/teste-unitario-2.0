import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';

import { Router } from '@angular/router';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubComponent ],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should navigate home when button clicked', () => {
    component.goTo()
    expect(router.navigate).toHaveBeenCalledWith(['/home'])
  });
});
