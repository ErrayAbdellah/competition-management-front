import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from 'src/app/models/fish';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private apiUrl = 'http://localhost:8081/v1/api-fish/all';
  constructor(private http:HttpClient) { }

  getAllFishs(): Observable<Fish[]>{
    return this.http.get<Fish[]>(this.apiUrl);
  }

}
