import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hunting } from 'src/app/models/hunting';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private apiUrl = 'http://localhost:8081/v1/api-hunting';

  constructor(private http: HttpClient) { }

  huntingFish( hunting: Hunting ): Observable<string> {
    return this.http.post<string>(this.apiUrl, hunting, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}