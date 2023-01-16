import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FillFormComponent } from './fill-form.component';

describe('FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFormComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill in form fields', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement
    input.value = 'Jean';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('Jean');
  });

  it('should fill out form', () => {
    component.name = 'Jean'
    component.fillForm();
    fixture.detectChanges();
    expect(component.form.controls['name'].value).toBeDefined();
  })
});
