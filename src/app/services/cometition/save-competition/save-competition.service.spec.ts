import { TestBed } from '@angular/core/testing';

import { SaveCompetitionService } from './save-competition.service';

describe('SaveCompetitionService', () => {
  let service: SaveCompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCompetitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
