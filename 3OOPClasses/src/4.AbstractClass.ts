export {}

abstract class AbstractProject{

    name1: string;
    budget1: number;

    constructor(name2: string, budget2: number){
        this.name1 = name2;
        this.budget1 = budget2;
    }

    printBudget(){
        console.log(`${this.name1} has a budget of ${this.budget1}`);
    }

    abstract makeDelivery(): void;
}

class AIProject extends AbstractProject{

    override makeDelivery(): void {
        console.log('We are making the delivery');
    }
}

const aiProject = new AIProject('AIProject', 1000);