export class Level {
    id: number;
    code: number;
    description: string;
    points: number;
    // fish: Fish[]; 
    constructor(id: number, code: number, description: string, points: number) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.points = points;
      }
}
