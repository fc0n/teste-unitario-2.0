import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
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

  it("Deve listar usuario por id getUsersById", () => {
    let spiedComponent  = spyOn(component, 'getUserMessage').and.callThrough();
    component.getUserMessage('Mensagem enviada com sucesso!');
    expect(spiedComponent).toHaveBeenCalledTimes(1);
  })
});
