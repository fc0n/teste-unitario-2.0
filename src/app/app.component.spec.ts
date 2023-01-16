import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'teste-unitarios'`, () => {
    expect(component.title).toEqual('teste-unitarios');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Teste Unitario / Jasmine e Karma');
  });

  it('should set value for user', () => {
    component.ngOnInit();
    expect(component.user).toBeDefined();
  });

  it("should list user by id getUsersById", () => {
    let spiedComponent  = spyOn(component, 'getUserMessage').and.callThrough();
    component.getUserMessage('Mensagem enviada com sucesso!');
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  });

  it('Should navigate home when button clicked', () => {
    component.goTo();
    expect(router.navigate).toHaveBeenCalledWith([`/dashboard`]);
  });

});
