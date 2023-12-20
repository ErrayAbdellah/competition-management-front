import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { Hunting } from 'src/app/models/hunting';
import { CompetitionService } from 'src/app/services/cometition/get-competition/competition.service';
import { HuntingService } from 'src/app/services/hnting/hunting.service';

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.css']
})
export class HuntingComponent {
  hunting: Hunting = new Hunting();
  nameFish: string ;
  selectedCompetitionId: number;
  competitions: Competition[] = [];

  constructor(private huntingService: HuntingService,private competitionService: CompetitionService) {}

  submitHunting(): void {
    console.log(this.hunting);
    this.hunting.competitionId = this.selectedCompetitionId ;
    this.huntingService.huntingFish(this.hunting).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }
  ngOnInit(): void {
    this.fetchFish();
   }
 
   fetchFish(){
    // this.hunting.fish.name = this.nameFish;
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