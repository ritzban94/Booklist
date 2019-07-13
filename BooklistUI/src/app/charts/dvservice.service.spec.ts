import { TestBed } from '@angular/core/testing';

import { DvserviceService } from './dvservice.service';

describe('DvserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DvserviceService = TestBed.get(DvserviceService);
    expect(service).toBeTruthy();
  });
});
