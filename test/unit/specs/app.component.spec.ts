import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './../../../src/app/app.component';
import { AppApiService } from './../../../src/app/shared/services/app-api/app-api.service';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [ AppComponent ],
      providers: [ AppApiService, provideRoutes([]) ]
    });
  });

  it ('should work', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
