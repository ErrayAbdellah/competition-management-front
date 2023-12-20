import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { Ranking } from 'src/app/models/ranking';
import { CompetitionService } from 'src/app/services/cometition/get-competition/competition.service';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-home-result',
  templateUrl: './home-result.component.html',
  styleUrls: ['./home-result.component.css']
})
export class HomeResultComponent {
  rankings: Ranking[];
  competitions:Competition[];
  selectedCompetitionId:number;

  constructor(private resultsService: ResultService,private competitionService:CompetitionService) {}

  ngOnInit(): void {
    // this.resultsService.getResults().subscribe(
    //   (data: Ranking[]) => {
    //     this.rankings = data;
    //   },
    //   error => console.error(error)
    // );
    this.fetchFish();
  }


  // ngOnInit(){
    
  // }
  submitHunting(): void {
    this.resultsService.getResults(this.selectedCompetitionId).subscribe(
      (data: Ranking[]) => {
        this.rankings = data;
      },
      error => console.error(error)
    );
    this.fetchFish();
    // console.log(this.selectedCompetitionId);
    // this.rankings[0].id.competitionId = this.selectedCompetitionId ;
    // this.huntingService.huntingFish(this.hunting).subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.error(error)
    // });
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
}
