import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  const pipe = new HttpPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should to transform http in https', () => {
    expect(pipe.transform('http://www.google.com')).toBe('https://www.google.com');
  });
});