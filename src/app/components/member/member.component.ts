import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';
import { EditMemberService } from 'src/app/services/memberService/edit-member/edit-member.service';
import { MemberService } from 'src/app/services/memberService/member/member.service';
import { RoleManagementService } from 'src/app/services/role-management.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  members: Member[] = [];
  currentPage = 1;
 itemsPerPage = 5; 
 selectedRole: string;
 

  constructor(
    private memberService: MemberService,
    private editMemberService: EditMemberService,
    private roleManagementService: RoleManagementService) {}

  ngOnInit(): void {
    this.fetchMembers();
  }

  fetchMembers() {
    this.memberService.getAllMembers().subscribe(
      (members: Member[]) => {
        this.members = members;
      },
      (error: any) => {
        console.error('Error fetching members:', error);
      }
    );
  }

  get totalPages(): number {
    return Math.ceil(this.members.length / this.itemsPerPage);
  }
  // Method to get members for the current page
  get paginatedCompetitions(): Member[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.members.slice(startIndex, startIndex + this.itemsPerPage);
  }


  editMember(member: Member) {
    this.editMemberService.setMemberForEdit(member);
  }
  
  deleteMember(id: number) {
    if(confirm("Are you sure to delete this member?")) {
      this.memberService.deleteMember(id).subscribe(
        () => {
          this.members = this.members.filter(c => c.id !== id);
        },
        error => {
          console.error('Error deleting member', error);
        }
      );
    }
  }

  changeMemberRole(memberId: number, newRole: string) {
    console.log("id : "+memberId);
    console.log("new role : "+newRole);

    // this.roleManagementService.updateMemberRole(memberId, newRole)
    //   .subscribe(
    //     () => {
    //       console.log(`Role updated successfully for member with ID ${memberId}`);
    //       // You can handle success actions here
    //     },
    //     (error) => {
    //       console.error('Error updating member role:', error);
    //       // Handle error actions here
    //     }
    //   );
  }

}
