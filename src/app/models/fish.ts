import { Level } from "./level";

export class Fish {
    id: number;
    name: string;
    averageWeight: number;
    level: Level; 

    // huntings: Hunting[];
    constructor(init?: Partial<Fish>) {
      Object.assign(this, init);
    }
}
