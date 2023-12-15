import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Competition from 'src/app/models/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = 'http://localhost:8081/v1/api-competition/all';
  constructor(private http:HttpClient) { }

  getAllFishs(): Observable<Competition[]>{
    return this.http.get<Competition[]>(this.apiUrl);
  }
}
