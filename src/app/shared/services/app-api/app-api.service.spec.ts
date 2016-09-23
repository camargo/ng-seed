import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppApiService } from './app-api.service';

describe('App Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AppApiService]
    });
  });

  it('should ...', inject([AppApiService], (appApiService: AppApiService) => {
    expect(true).toBe(true);
  }));
});
