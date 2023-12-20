import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from 'src/app/models/ranking';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private apiUrl = 'http://localhost:8081/v1/api-ranking/updateRankings'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  getResults(competitionId:number): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.apiUrl}/${competitionId}`);
  }
}
