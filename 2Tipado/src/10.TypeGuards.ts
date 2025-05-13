export {}

type Salary = {
    amount: number
}

function isSalary(arg: any): arg is Salary{
    return (('amount' in arg) && (typeof arg.amount === 'number'))
}

function paySalary(arg: unknown){
    if(isSalary(arg)){
        console.log(`Pay ${arg.amount}`)
    }
}