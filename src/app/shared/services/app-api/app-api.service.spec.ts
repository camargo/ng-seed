import { inject, TestBed } from '@angular/core/testing';

import { AppApiService } from './app-api.service';

describe('App Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [AppApiService]});
  });

  it('should ...', inject([AppApiService], (appApiService: AppApiService) => {
    expect(true).toBe(true);
  }));
});
