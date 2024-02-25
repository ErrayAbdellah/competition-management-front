import { CanActivateFn, Router } from '@angular/router';


export const JuryGuard: CanActivateFn = (route, state) => {

  const jwtToken = sessionStorage.getItem('auth-user');
  let role:string="" ;  
  if(jwtToken)
  role = JSON.parse(jwtToken).role.name
  
  console.log('true');
    if (role === "ROLE_JURY" || role === "ROLE_MANAGER") {
      console.log('true ROLE_JURY');
      return true;
    } else {
      console.log('Navigating to default route ROLE_JURY');
      return false;
    }
};