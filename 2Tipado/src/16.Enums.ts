export{}

enum Position{
    Programmer = 'Programmer',
    HR = 'HR',
    CEO = 'CEO',
    Manager = 'Manager',
    JuniorProgrammer = 'JuniorProgrammer'
}

type Employee = {
    name: string,
    salary: number,
    position: Position
}

function payBonus (emp: Employee){
    if(emp.position === Position.CEO){
        // Pagamos el bonus
    }
}

//Alternativa para hacer lo mismo
type PositionType = 
    | 'Programmer'
    | 'HR'
    | 'CEO'



function payAnnualBonus (emp: Employee){
    let bonusPercent: number = 0;

    switch (emp.position){
        case Position.Programmer:
            bonusPercent = 0.2
            break;
        case Position.HR:
            bonusPercent = 0.8
            break;
        case Position.CEO:
            bonusPercent = 200
            break;
        case Position.Manager:
            bonusPercent = 100
            break;
        default:
            // Usamos never cuando queremos asegurarnos al 100% que mi ejecución no pasa por esta línea de código
            const remainingvalues: never = emp.position

            break;
    }
}