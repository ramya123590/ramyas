import { TestBed } from '@angular/core/testing';

import { PatientregistrationserviceService } from './patientregistrationservice.service';

describe('PatientregistrationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientregistrationserviceService = TestBed.get(PatientregistrationserviceService);
    expect(service).toBeTruthy();
  });
});
