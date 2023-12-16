import { TestBed } from '@angular/core/testing';

import { SaveMemberService } from './save-member.service';

describe('SaveMemberService', () => {
  let service: SaveMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
