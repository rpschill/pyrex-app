import { TestBed, inject } from '@angular/core/testing';

import { PatternsService } from './patterns.service';

describe('PatternsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatternsService]
    });
  });

  it('should be created', inject([PatternsService], (service: PatternsService) => {
    expect(service).toBeTruthy();
  }));
});
