import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/cometition/get-competition/competition.service';

@Component({
  selector: 'app-home-competition',
  templateUrl: './home-competition.component.html',
  styleUrls: ['./home-competition.component.css']
})
export class HomeCompetitionComponent {
  competitions: Competition[] = [];

   
 constructor(
  private competitionService: CompetitionService){}

  ngOnInit(){
    this.fetchFish();

  }

  fetchFish(){
    return this.competitionService.getAllCompetitions().subscribe(
      (competitions: Competition[]) => {
        this.competitions = competitions;
      },
      (error: any) => {
        console.log('Error fetching fishs :',error);
      }
    );
  }
  hasUpcomingCompetitions(): boolean {
    return this.competitions.some(competition => this.isUpcoming(competition));
  }

  hasPastCompetitions(): boolean {
    return this.competitions.some(competition => !this.isUpcoming(competition));
  }

  isUpcoming(competition: Competition): boolean {
    const currentDate = new Date();
    
    // Assuming competition.date is a Date object or ISO string
    const competitionDate = new Date(competition.date);
  
    return competitionDate > currentDate;
  }
}
