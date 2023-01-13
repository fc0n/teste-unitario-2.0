import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixProblemsComponent } from './fix-problems.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FixProblemsComponent', () => {
  let component: FixProblemsComponent;
  let fixture: ComponentFixture<FixProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixProblemsComponent ],
      imports: [ 
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
