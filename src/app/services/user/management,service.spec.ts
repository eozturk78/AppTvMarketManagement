import { TestBed } from '@angular/core/testing';

import { ManagementService } from './management.service';

describe('LoginService', () => {
  let service: ManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
