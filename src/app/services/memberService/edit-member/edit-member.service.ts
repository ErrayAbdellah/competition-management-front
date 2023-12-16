import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Member } from 'src/app/models/member';

@Injectable({
  providedIn: 'root'
})
export class EditMemberService {

  private editMemberSubject = new BehaviorSubject<Member | null>(null);
  
  setMemberForEdit(member: Member) {
    this.editMemberSubject.next(member);
  }

  getMemberForEdit(): Observable<Member | null> {
    return this.editMemberSubject.asObservable();
  }

  clearMemberForEdit() {
    this.editMemberSubject.next(null);
  }
}
