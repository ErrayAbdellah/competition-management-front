import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/cometition/get-competition/competition.service';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  memberId: string = '';
  selectedCompetitionId: number | null = null;
  competitions: Competition[] = []; // Replace with your competition model
  
  constructor(private registrationService: RegistrationService,private competitionService: CompetitionService) { }
  // constructor(private competitionService: CompetitionService) {}

  ngOnInit(): void {
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

  registerMember(): void {
    if (this.selectedCompetitionId && this.memberId) {
      this.registrationService.registerMemberForCompetition(this.selectedCompetitionId, this.memberId).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error)
      });
    }
  }
}
