import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './components/member/member.component';
import { FishComponent } from './components/fish/fish.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { HomeCompetitionComponent } from './components/home-competition/home-competition.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HuntingComponent } from './components/hunting/hunting.component';
import { HomeResultComponent } from './components/home-result/home-result.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './_guards/auth.guard';
import { roleMemberGuard } from './_guards/member.guard';
import { JuryGuard } from './_guards/jury.guard';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full'},
  { path:"member" , component : MemberComponent ,canActivate: [authGuard,JuryGuard]},
  { path:"fish" , component : FishComponent ,canActivate: [authGuard,JuryGuard]},
  { path:"competition" , component : CompetitionComponent ,canActivate: [authGuard,JuryGuard]},
  { path:"home-competition" , component : HomeCompetitionComponent ,canActivate: [authGuard, roleMemberGuard]},
  { path:"result" , component : HomeResultComponent ,canActivate: [authGuard, roleMemberGuard]},
  { path:"hunting" , component : HuntingComponent,canActivate: [authGuard,JuryGuard]},
  { path:"registration" , component : RegistrationComponent ,canActivate: [authGuard,roleMemberGuard]},
  { path:"" , component : HomeComponent ,canActivate: [authGuard,]},
  { path: "register",component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
