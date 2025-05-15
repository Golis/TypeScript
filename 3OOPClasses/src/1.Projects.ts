export {}

class Project {
    // Variables y características principales de la clase
    name1: string;
    budget1: number;

    constructor(name2: string, budget2: number){
        this.name1 = name2;
        this.budget1 = budget2;
    }

    printBudget(){
        console.log(`${this.name1} has a budget of ${this.budget1}`);
    }

    getProjectName(){
        return this.name1;
    }

    setProjectName(newName: string){
        this.name1 = newName;
    }

}


const project = new Project('BestProject', 1000);
project.printBudget();

