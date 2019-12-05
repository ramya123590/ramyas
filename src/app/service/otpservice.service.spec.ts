import { TestBed } from '@angular/core/testing';

import { OtpserviceService } from './otpservice.service';

describe('OtpserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtpserviceService = TestBed.get(OtpserviceService);
    expect(service).toBeTruthy();
  });
});
