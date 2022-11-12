import { TestBed } from '@angular/core/testing';

import { SigningUpService } from './signing-up.service';

describe('SigningUpService', () => {
  let service: SigningUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigningUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
