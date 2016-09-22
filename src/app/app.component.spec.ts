import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppApiService } from './shared';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [AppComponent],
      providers: [AppApiService, provideRoutes([])]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
