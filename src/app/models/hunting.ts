import { Fish } from "./fish";
import { Member } from "./member";

export class Hunting {
  id: number;
  numberOfFish: number;
  fish: Fish; 
  memberCode: Member; 
  competitionId: number;

  constructor(init?: Partial<Hunting>) {
    Object.assign(this, init);
    this.fish = new Fish();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  }

}