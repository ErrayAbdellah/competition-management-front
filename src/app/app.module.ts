import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/front/sidebar/sidebar.component';
import { MemberComponent } from './components/member/member.component';
import { HttpClientModule } from '@angular/common/http';
import { FishComponent } from './components/fish/fish.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { SaveCompetitionComponent } from './components/save-competition/save-competition.component';
import { FormsModule } from '@angular/forms';
import { SaveMemberComponent } from './components/save-member/save-member.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MemberComponent,
    FishComponent,
    CompetitionComponent,
    SaveCompetitionComponent,
    SaveMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
