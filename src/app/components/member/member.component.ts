import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

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

}
