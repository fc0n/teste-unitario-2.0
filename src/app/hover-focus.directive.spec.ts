import { HostListener } from '@angular/core';
import { HoverFocusDirective } from './hover-focus.directive';

describe('HoverFocusDirective', () => {
  let directive = new HoverFocusDirective();

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should check if the background is blue', () => {
    directive.onHover();
    expect(directive.backgroundColor).toEqual('blue');
  });

  it('should check if the background is inherit', () => {
    directive.onLeave();
    expect(directive.backgroundColor).toEqual('inherit');
  });
});