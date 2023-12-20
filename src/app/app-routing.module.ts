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

const routes: Routes = [
  { path:"member" , component : MemberComponent },
  { path:"fish" , component : FishComponent },
  { path:"competition" , component : CompetitionComponent },
  { path:"home-competition" , component : HomeCompetitionComponent },
  { path:"hunting" , component : HuntingComponent },
  { path:"result" , component : HomeResultComponent },
  { path:"" , component : HomeComponent },
  { path:"registration" , component : RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
