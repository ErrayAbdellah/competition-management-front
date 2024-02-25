import { IdentityDocumentType } from "./enums/identity-document-type.enum";

export class Member {
    id: number;
    num: number;
    name: string;
    familyName: string;
    accessionDate: Date;
    nationality: string;
    role:string;
    identityDocument: IdentityDocumentType;
    identityNumber: string;
    
    constructor(init?: Partial<Member>) {
      Object.assign(this, init);
    }
    
}
