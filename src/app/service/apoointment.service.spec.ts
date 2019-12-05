import { TestBed } from '@angular/core/testing';

import { ApoointmentService } from './apoointment.service';

describe('ApoointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApoointmentService = TestBed.get(ApoointmentService);
    expect(service).toBeTruthy();
  });
});
