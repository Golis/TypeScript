export{}

type bonusPercent = 10 | 20 | 30;

type Salary = {
    amount: number
    currency: 'USD' | 'EUR'
    yearlyBonus?: bonusPercent
    //esta sería otra manera de hacer lo mismo
    // yearlyBonus: bonusPercent | undefined
}

type Employee = {
    name: string,
    salary: Salary
}

const JohnnattanSalary: Salary = {
    amount: 60000,
    currency: 'EUR',
    yearlyBonus: 10
}

const johnnattan: Employee = {
    name: 'Johnnattan',
    salary:{
        amount: 60000,
        currency: 'EUR',
    }
}

function paySalary(employee: Employee, extraWork?: string){
    console.log(`Payed ${employee.salary.amount} ${employee.salary.currency} to ${employee.name}`);
    if(employee.salary.yearlyBonus){
        console.log(`${employee.name} received a bonus of ${employee.salary.yearlyBonus}`);
    }

    if(extraWork){
        console.log(`${employee.name} received an extra amunt because of hard work in ${extraWork}`);
    }
}

paySalary(johnnattan);
paySalary(johnnattan, 'Code reviews');