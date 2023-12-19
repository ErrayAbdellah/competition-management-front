import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';

@Injectable({
  providedIn: 'root'
})
export class SaveMemberService {

  private apiUrl = 'http://localhost:8081/v1/api-member';

  constructor(private http: HttpClient) {}

  saveMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }

  updateMember(member: Member): Observable<Member> {
    const url = `${this.apiUrl}/${member.id}`;
    return this.http.put<Member>(url, member);
  }
}
