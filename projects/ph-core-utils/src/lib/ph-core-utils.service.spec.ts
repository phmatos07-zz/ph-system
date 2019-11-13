import { TestBed } from '@angular/core/testing';

import { PhCoreUtilsService } from './ph-core-utils.service';

describe('PhCoreUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhCoreUtilsService = TestBed.get(PhCoreUtilsService);
    expect(service).toBeTruthy();
  });
});
