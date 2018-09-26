import { Ingreident } from './../shared/ingredient.modal';

export class Recipe {
    name: string;
    description: string;
    icon: string;
    ingredient: Ingreident[];

    constructor(n: string, d: string, p: string, i: Ingreident[]) {
        this.name = n;
        this.description = d;
        this.icon = p;
        this.ingredient = i;
    }
}
