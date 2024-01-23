import { Component } from '@angular/core';
import { catchError, map, of } from 'rxjs';
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
  competitions: Competition[] = []; 
  messageError:string;

  modalTitle: string = '';
  modalMessage: string = '';
  showModal: boolean = false;
  
  constructor(private registrationService: RegistrationService,private competitionService: CompetitionService) { }

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
      this.registrationService.registerMemberForCompetition(this.selectedCompetitionId, this.memberId)

      .subscribe(
        {
        // error: (err) => {
        //     if(err.error.details){
        //       this.messageError=err.error.details
        //       console.log(this.messageError)
        //     }
        //     else if(err.error.text){ //data
        //       console.log(err.error.text)
        //     }
        //   }
        next: (response) => {
          this.modalTitle = 'Success';
          this.modalMessage = 'Competition saved successfully';
          this.showModal = true;
        },
        error: (error) => {
          this.modalTitle = 'Error';
          this.modalMessage = 'An error occurred';
          this.showModal = true;
        }
      });
    }
  }
}
