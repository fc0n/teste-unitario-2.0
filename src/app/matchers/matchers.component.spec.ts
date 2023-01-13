import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the use of matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1,2,3]).toEqual([1,2,3])
  });

  it('should test the use of matcher toBe', () => {
    let numero = 10;
    let nome = 'Jean';
    expect(numero).toBe(10);
    expect(nome).toBe('Jean');
  });

  it('should test the use of matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();
  });
});
