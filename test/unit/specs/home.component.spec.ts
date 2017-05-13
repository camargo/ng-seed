import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './../../../src/app/home/home.component';

describe('Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HomeComponent]});
  });

  it ('should work', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });
});
