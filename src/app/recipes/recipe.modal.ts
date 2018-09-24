
export class Recipe {
    name: string;
    description: string;
    icon: string;

    constructor(n: string, d: string, p: string) {
        this.name = n;
        this.description = d;
        this.icon = p;
    }
}
