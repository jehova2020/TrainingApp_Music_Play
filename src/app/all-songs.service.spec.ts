import { TestBed } from '@angular/core/testing';

import { AllSongsService } from './all-songs.service';

describe('AllSongsService', () => {
  let service: AllSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
