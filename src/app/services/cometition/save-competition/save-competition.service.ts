import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Competition from 'src/app/models/competition';

@Injectable({
  providedIn: 'root'
})
export class SaveCompetitionService {

  private apiUrl = 'http://localhost:8081/v1/api-competition';

  constructor(private http: HttpClient) {}

  saveCompetition(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(this.apiUrl, competition);
  }

  updateCompetition(competition: Competition): Observable<Competition> {
    const url = `${this.apiUrl}/${competition.id}`;
    return this.http.put<Competition>(url, competition);
  }
}
