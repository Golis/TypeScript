export {}

// Clase base
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
}

class SecretProject extends Project{

    secrecyLevel1: 1 | 2 | 3

    constructor(secrecyLevel2: 1 | 2 | 3){
        super('Secret project', 500000)
        this.secrecyLevel1 = secrecyLevel2;
    }

    override printBudget(): void {
        console.log('The budget is secret!!!!')
    }
}

const project = new Project('TransparentProject', 1000);
project.printBudget();

const confidentialProject = new SecretProject(3)

confidentialProject.printBudget();
