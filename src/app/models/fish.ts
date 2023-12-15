import { Hunting } from "./hunting";
import { Level } from "./level";

export class Fish {
    id: number;
    name: string;
    averageWeight: number;
    level: Level; 

    // huntings: Hunting[];
    constructor(id: number, name: string, averageWeight: number, level: Level) {
        this.id = id;
        this.name = name;
        this.averageWeight = averageWeight;
        this.level = level;
      }
}
