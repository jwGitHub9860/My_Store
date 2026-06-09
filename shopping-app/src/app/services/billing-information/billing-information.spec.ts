import { TestBed } from '@angular/core/testing';

import { BillingInformationService } from './billing-information';

describe('BillingInformationService', () => {
  let service: BillingInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
