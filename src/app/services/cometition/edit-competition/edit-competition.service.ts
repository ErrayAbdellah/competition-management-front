import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Competition from 'src/app/models/competition';

@Injectable({
  providedIn: 'root'
})
export class EditCompetitionService {
  private editCompetitionSubject = new BehaviorSubject<Competition | null>(null);
  
  setCompetitionForEdit(competition: Competition) {
    this.editCompetitionSubject.next(competition);
  }

  getCompetitionForEdit(): Observable<Competition | null> {
    return this.editCompetitionSubject.asObservable();
  }

  clearCompetitionForEdit() {
    this.editCompetitionSubject.next(null);
  }
}
