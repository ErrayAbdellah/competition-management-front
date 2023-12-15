import Competition from "./competition";
import { Member } from "./member";

export class Ranking {
    rank: number;
    score: number;
    member: Member; // Assuming you have a Member model
    competition: Competition; 
    constructor(
        rank: number,
        score: number,
        member: Member,
        competition: Competition
      ) {
        this.rank = rank;
        this.score = score;
        this.member = member;
        this.competition = competition;
      }
}
