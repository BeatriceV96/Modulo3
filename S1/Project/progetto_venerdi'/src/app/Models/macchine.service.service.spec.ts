import { TestBed } from '@angular/core/testing';

import { MacchineServiceService } from './macchine.service.service';

describe('MacchineServiceService', () => {
  let service: MacchineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacchineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
