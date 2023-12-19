import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8081/v1/api-ranking'; 

  constructor(private http: HttpClient) { }

  registerMemberForCompetition(competitionId: number, identityNumber: string): Observable<string> {
    const url = `${this.apiUrl}/${competitionId}/register/${identityNumber}`;
    return this.http.post<string>(url, null);
  }
}