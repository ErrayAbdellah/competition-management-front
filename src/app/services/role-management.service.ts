import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  private apiUrl = 'your_backend_api_url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  updateMemberRole(memberId: number, newRole: string): Observable<any> {
    const url = `${this.apiUrl}/members/${memberId}/role`; // Update the URL based on your API endpoint
    const body = { role: newRole };

    return this.http.patch(url, body);
  }
}
