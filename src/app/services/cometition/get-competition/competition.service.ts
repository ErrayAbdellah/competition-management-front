import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Competition from 'src/app/models/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  updateCompetition(competition: Competition) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8081/v1/api-competition';

  constructor(private http:HttpClient) { }

  getAllCompetitions(): Observable<Competition[]>{
    return this.http.get<Competition[]>(`${this.apiUrl}/all`);
  }
  deleteCompetition(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
