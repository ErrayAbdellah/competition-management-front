import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './components/member/member.component';
import { FishComponent } from './components/fish/fish.component';
import { CompetitionComponent } from './components/competition/competition.component';

const routes: Routes = [
  { path:"member" , component : MemberComponent },
  { path:"fish" , component : FishComponent },
  { path:"competition" , component : CompetitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
