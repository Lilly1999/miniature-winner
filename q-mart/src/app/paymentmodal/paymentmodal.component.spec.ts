import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmodalComponent } from './paymentmodal.component';

describe('PaymentmodalComponent', () => {
  let component: PaymentmodalComponent;
  let fixture: ComponentFixture<PaymentmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
