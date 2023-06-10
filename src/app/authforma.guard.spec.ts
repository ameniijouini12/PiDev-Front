import { TestBed } from '@angular/core/testing';

import { AuthformaGuard } from './authforma.guard';

describe('AuthformaGuard', () => {
  let guard: AuthformaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthformaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
