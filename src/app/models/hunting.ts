import Competition from "./competition";
import { Fish } from "./fish";
import { Member } from "./member";

export class Hunting {
    id: number;
  numberOfFish: number;
  fish: Fish; 
  member: Member; 
  competition: Competition;

  constructor(
    id: number,
    numberOfFish: number,
    fish: Fish,
    member: Member,
    competition: Competition
  ) {
    this.id = id;
    this.numberOfFish = numberOfFish;
    this.fish = fish;
    this.member = member;
    this.competition = competition;
  }

}
