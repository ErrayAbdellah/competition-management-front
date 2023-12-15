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
//   rankings: Ranking[]; 
//   huntings: Hunting[];
constructor(
    id: number,
    code: string,
    date: Date,
    startTime: string,
    endTime: string,
    numberOfParticipants: number,
    location: string,
    amount: number,
  ) {
    this.id = id;
    this.code = code;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.numberOfParticipants = numberOfParticipants;
    this.location = location;
    this.amount = amount;
  }

}
