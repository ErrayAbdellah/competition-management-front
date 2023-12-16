import { Hunting } from "./hunting";
import { Ranking } from "./ranking";

export default class Competition {
  id: number;
  code: string;
  date: Date;
  startTime: string; 
  endTime: string;
  numberOfParticipants: number;
  location: string;
  amount: number;

  constructor(init?: Partial<Competition>) {
    Object.assign(this, init);
  }
   
  public  set SetStartTime(startTime : string) {
    this.startTime = startTime+':00';
  }
  public get getstartTime(): string {
    return this.startTime;
  }
  public  set SetEndTime(endTime : string) {
    this.endTime = endTime+':00';
  }
  public get getEndTime(): string {
    return this.endTime;
  }
}
