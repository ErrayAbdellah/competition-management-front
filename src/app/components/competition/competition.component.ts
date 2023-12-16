import { Component } from '@angular/core';
import Competition from 'src/app/models/competition';
import { EditCompetitionService } from 'src/app/services/cometition/edit-competition/edit-competition.service';
import { CompetitionService } from 'src/app/services/cometition/get-competition/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {
 competitions: Competition[] = [];
 currentPage = 1;
 itemsPerPage = 5; 

 constructor(
  private competitionService: CompetitionService,
  private editCompetitionService:EditCompetitionService){}

  ngOnInit(){
    this.fetchFish();
  }

  fetchFish(){
    return this.competitionService.getAllCompetitions().subscribe(
      (competitions: Competition[]) => {
        console.log(competitions);
        this.competitions = competitions;
      },
      (error: any) => {
        console.log('Error fetching fishs :',error);
      }
    );
  }
  get totalPages(): number {
    return Math.ceil(this.competitions.length / this.itemsPerPage);
  }
  // Method to get competitions for the current page
  get paginatedCompetitions(): Competition[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.competitions.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  
  // refreshCompetitions() {
  //   this.getAllCompetitions().subscribe(competitions => {
  //     this.competitionsSubject.next(competitions);
  //   });
  // }

  editCompetition(competition: Competition) {
    this.editCompetitionService.setCompetitionForEdit(competition);
  }
  
  deleteCompetition(id: number) {
    if(confirm("Are you sure to delete this competition?")) {
      this.competitionService.deleteCompetition(id).subscribe(
        () => {
          this.competitions = this.competitions.filter(c => c.id !== id);
        },
        error => {
          console.error('Error deleting competition', error);
        }
      );
    }
  }

}
