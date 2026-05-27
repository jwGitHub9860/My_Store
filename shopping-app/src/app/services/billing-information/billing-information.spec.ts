import { TestBed } from '@angular/core/testing';

import { BillingInformation } from './billing-information';

describe('BillingInformation', () => {
  let service: BillingInformation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingInformation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
