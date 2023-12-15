import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/cometition/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {
 competitions: Competition[] = [];
 constructor(private competitionService: CompetitionService){}

  ngOnInit(){
    this.fetchFish();
  }
  fetchFish(){
    return this.competitionService.getAllFishs().subscribe(
      (competitions: Competition[]) => {
        this.competitions = competitions;
      },
      (error: any) => {
        console.log('Error fetching fishs :',error);
      }
    );
  }
}
