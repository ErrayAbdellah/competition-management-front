import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){
  }

  hasAuthorityManager(): boolean {

    const role = sessionStorage.getItem('role');

    return this.isLoggedIn() && (role === 'ROLE_MANAGER' || role ==='ROLE_JURY');
  }
  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  isLoggedOut(): boolean{
    return sessionStorage.getItem('token') == null;
  }
  Logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(["login"])
  }

}
