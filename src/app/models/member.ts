import { Hunting } from "./hunting";
import { Ranking } from "./ranking";

export class Member {
    id: number;
    num: number;
    name: string;
    familyName: string;
    accessionDate: Date;
    nationality: string;
    identityDocument: string;
    identityNumber: string;
    // rankings: Ranking[]; 
    // huntings: Hunting[]; 
    constructor(
        id: number,
        num: number,
        name: string,
        familyName: string,
        accessionDate: Date,
        nationality: string,
        identityDocument: string,
        identityNumber: string,
        // rankings: Ranking[],
        // huntings: Hunting[]
      ) {
        this.id = id;
        this.num = num;
        this.name = name;
        this.familyName = familyName;
        this.accessionDate = accessionDate;
        this.nationality = nationality;
        this.identityDocument = identityDocument;
        this.identityNumber = identityNumber;
        // this.rankings = rankings;
        // this.huntings = huntings;
    }
    
}
