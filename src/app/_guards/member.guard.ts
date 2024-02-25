import { CanActivateFn, Router } from '@angular/router';

export const roleMemberGuard: CanActivateFn = (route, state) => {
  const router = new Router;

  console.log('roleMemberGuard canActivate');
  const jwtToken = sessionStorage.getItem('auth-user');
  let role:string="" ;  
  if(jwtToken){
    role = JSON.parse(jwtToken).role.name
    if ( role === "ROLE_ADHERENT" || role === "ROLE_JURY" || role === "ROLE_MANAGER") {
      console.log('true');
      return true;
    } else {
      console.log('Navigating to default route');
      return false;
    }
  }else{
    return false ;
  }

  
//   const router = new Router;
//   const jwtToken = sessionStorage.getItem('auth-user');

//   if (jwtToken && JSON.parse(jwtToken).role.name==="ROLE_ADHERENT") {
//     return true;
//   } else {
//     router.navigate([""]); 
//     return false;
//   }
};