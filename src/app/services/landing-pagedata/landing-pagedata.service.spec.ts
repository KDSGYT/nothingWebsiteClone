import { TestBed } from '@angular/core/testing';

import { LandingPagedataService } from './landing-pagedata.service';

describe('LandingPagedataService', () => {
  let service: LandingPagedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPagedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
