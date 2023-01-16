import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should access element DOM with debugElement.query()', () => {
    let title = fixture.debugElement.nativeElement.querySelector('h1');
    expect(title.textContent).toBe('Trabalhando com debugElement.query() e nativeElement.querySelector()');
  });

  it('should have background-color green button yes', () => {
    let btnYes = fixture.debugElement.query(By.css('.btn-yes')).nativeElement
    expect(btnYes.style.backgroundColor).toBe('green');
  });

  it('should have background-color red button no', () => {
    let btnNo = fixture.debugElement.query(By.css('.btn-no')).nativeElement
    expect(btnNo.style.backgroundColor).toBe('red');
  });
});
