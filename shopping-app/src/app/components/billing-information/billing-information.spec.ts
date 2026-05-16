import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInformation } from './billing-information';

describe('BillingInformation', () => {
  let component: BillingInformation;
  let fixture: ComponentFixture<BillingInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
