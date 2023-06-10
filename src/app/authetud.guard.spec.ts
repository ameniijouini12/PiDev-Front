import { TestBed } from '@angular/core/testing';

import { AuthetudGuard } from './authetud.guard';

describe('AuthetudGuard', () => {
  let guard: AuthetudGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthetudGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
