import { Component } from '@angular/core';
import { Fish } from 'src/app/models/fish';
import { FishService } from 'src/app/services/fish/fish.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
  fishs: Fish[] = [];

  constructor(private fishService: FishService){}

  ngOnInit(){
    this.fetchFish();
  }
  fetchFish(){
    return this.fishService.getAllFishs().subscribe(
      (fishs: Fish[]) => {
        this.fishs = fishs;
      },
      (error: any) => {
        console.log('Error fetching fishs :',error);
      }
    );
  }

}
