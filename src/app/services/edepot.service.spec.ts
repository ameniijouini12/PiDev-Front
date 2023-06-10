import { TestBed } from '@angular/core/testing';

import { EdepotService } from './edepot.service';

describe('EdepotService', () => {
  let service: EdepotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdepotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
