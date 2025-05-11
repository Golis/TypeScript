export{}

//Tipo Literal
type Programmer = 'Programmer'
type HR = 'HR'

let bestProgrammer: Programmer = 'Programmer'

type PositionType = Programmer | HR

function getSalaryForPosition(position: PositionType): number | undefined{
    if(position === 'Programmer'){
        bestProgrammer = position;
        return 100000
    }
    if(position === 'HR'){
        return 120000
    }
}