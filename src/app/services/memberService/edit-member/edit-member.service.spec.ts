import { TestBed } from '@angular/core/testing';

import { EditMemberService } from './edit-member.service';

describe('EditMemberService', () => {
  let service: EditMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
