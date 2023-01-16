import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive user', () => {
    const user = { name: 'Jean', email: 'jean.gabriel@gmail.com', password: '091011' };
    component.user = user;
    expect(component.user).toBe(user);
  });

  it('should emit message when button click', () => {
    const emitMessageSpy = spyOn(component.userMessage, 'emit');
    let button = fixture.debugElement.query(By.css('button')).nativeElement
    button.click();
    expect(emitMessageSpy).toHaveBeenCalled();
  })
});
