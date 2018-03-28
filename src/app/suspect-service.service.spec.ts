import { TestBed, inject } from '@angular/core/testing';

import { SuspectServiceService } from './suspect-service.service';

describe('SuspectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuspectServiceService]
    });
  });

  it('should be created', inject([SuspectServiceService], (service: SuspectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
