export class Member {
    id: number;
    num: number;
    name: string;
    familyName: string;
    accessionDate: Date;
    nationality: string;
    identityDocument: string;
    identityNumber: string;
    constructor(init?: Partial<Member>) {
      Object.assign(this, init);
    }
    
}
