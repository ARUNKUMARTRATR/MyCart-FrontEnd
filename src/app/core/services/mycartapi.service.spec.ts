import { TestBed } from '@angular/core/testing';

import { MycartapiService } from './mycartapi.service';

describe('MycartapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycartapiService = TestBed.get(MycartapiService);
    expect(service).toBeTruthy();
  });
});
