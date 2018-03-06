import { TestBed, inject } from '@angular/core/testing';

import { SessionTimeOutService } from './session-time-out.service';

describe('SessionTimeOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionTimeOutService]
    });
  });

  it('should be created', inject([SessionTimeOutService], (service: SessionTimeOutService) => {
    expect(service).toBeTruthy();
  }));
});
