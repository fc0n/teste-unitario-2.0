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

  it('should test the use of matcher toBeFasly', () => {
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(undefined).toBeFalsy();
  });

  it('should test the use of matcher toBeTrue', () => {
    expect(true).toBeTrue();
  });

  it('should test the use of matcher toBeFalse', () => {
    expect(false).toBeFalse();
  });

  it('should test the use of matcher not', () => {
    expect("Jean").not.toEqual("Julia");
  });

  it('should test the use of matcher toContain', () => {
    expect('Marvel').toContain('Marv');
    expect([1,2,3]).toContain(1);
  });

  it('should test the use of matcher toBeDefined', () => {
    let name;
    name = 'Jean';
    expect(name).toBeDefined();
  });

  it('should test the use of matcher toBeUndefined', () => {
    let name;
    expect(name).toBeUndefined();
  });

  it('should test the use of matcher toBeNull', () => {
    expect(null).toBeNull();
  });

  it('should test the use of matcher toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(1);
  });

  it('should test the use of matcher toBeLessThan', () => {
    expect(10).toBeLessThan(20);
  });

  it('should test the use of matcher toBeCloseTo', () => {
    expect(35.20).toBeCloseTo(35.2, 1);
  });

  it('should test the use of matcher toMatch', () => {
    expect('Marvel').toMatch(/M/);
  });

  it('should test the use of matcher toThrow', () => {
    expect(function (){
      throw new Error('error');
    }).toThrow()
  });
});
