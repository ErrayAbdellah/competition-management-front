import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://localhost:8081/v1/api-member/all';

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }
  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
