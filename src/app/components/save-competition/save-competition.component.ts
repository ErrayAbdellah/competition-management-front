import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { EditCompetitionService } from 'src/app/services/cometition/edit-competition/edit-competition.service';
import { CompetitionService } from 'src/app/services/cometition/get-competition/competition.service';
import { SaveCompetitionService } from 'src/app/services/cometition/save-competition/save-competition.service';

@Component({
  selector: 'app-save-competition',
  templateUrl: './save-competition.component.html',
  styleUrls: ['./save-competition.component.css']
})
export class SaveCompetitionComponent {

  competition: Competition = new Competition();
  editMode = false;
  competitions: Competition[] = [];
  errorMessage: string = '';


  // constructor(private saveCompetitionService: SaveCompetitionService, private competitionService: CompetitionService) {
    
  // }
  constructor(
    private competitionService: CompetitionService,
    private saveCompetitionService: SaveCompetitionService,
    private competitionEditService: EditCompetitionService) {}

  ngOnInit() {
    this.competitionEditService.getCompetitionForEdit().subscribe(
      (comp: Competition | null) => {
        if (comp) {
          this.competition = comp;
          this.editMode = true;
        }
      }
    );
  }
  setEditMode(competition: Competition) {
    this.competition = competition;
    this.editMode = true;
  }
    
  onSubmit() {
    if (this.editMode) {
      
      this.saveCompetitionService.updateCompetition(this.competition).subscribe(
        response => {
          console.log('Competition updated', response);
          this.resetForm();
        },
        error => {
          console.error('Error updating competition', error);
        }
      );
    } else {
      
      this.saveCompetitionService.saveCompetition(this.competition).subscribe({
        next: (responseText) => {
          console.log('Competition saved:', responseText);
          this.resetForm();
        },
        error: (error) => {
          console.error('Error saving competition:', error.error.message);
          this.resetForm();
        }
      });
    }
  }

  resetForm() {
    this.competition = new Competition();
    this.editMode = false;
  }

  
  
}
