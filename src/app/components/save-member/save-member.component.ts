import { Component } from '@angular/core';
import { IdentityDocumentType } from 'src/app/models/enums/identity-document-type.enum';
import { Member } from 'src/app/models/member';
import { SaveMemberService } from 'src/app/services/memberService/save-member/save-member.service';

@Component({
  selector: 'app-save-member',
  templateUrl: './save-member.component.html',
  styleUrls: ['./save-member.component.css']
})
export class SaveMemberComponent {
  member: Member = new Member();
  editMode = false;
  members: Member[] = [];
  identityDocumentTypes = Object.values(IdentityDocumentType);

  constructor(private saveService: SaveMemberService) {}

  ngOnInit() {
    // Fetch members or set up for edit mode
  }

  setEditMode(member: Member) {
    this.member = member;
    this.editMode = true;
  }

  onSubmitMember() {
    if (this.editMode) {
      // Update member
      this.saveService.updateMember(this.member).subscribe(
        // ...
      );
    } else {
      // Save new member
      this.saveService.saveMember(this.member).subscribe(
        // ...
      );
    }
  }

  resetForm() {
    this.member = new Member();
    this.editMode = false;
  }

  // Other methods as needed
}
