import { TestBed } from '@angular/core/testing';

import { Get4Service } from './get4.service';

describe('Get4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Get4Service = TestBed.get(Get4Service);
    expect(service).toBeTruthy();
  });
});
