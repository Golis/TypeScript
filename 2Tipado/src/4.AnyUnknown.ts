export {}

let queryResult: any = 5;
queryResult = '5';
queryResult = [5];

function getSalaryFromAPI(employeeId: number): unknown{
    return JSON.parse('5');
}

let salary = getSalaryFromAPI(111);

if(typeof salary === 'number'){
    salary++;
}

if(typeof salary === 'string'){
    salary.includes('$');
}

if(typeof salary === 'string' || typeof salary === 'number'){
    salary.valueOf();
}

if(salary && typeof salary === 'object' && 'amount' in salary && Array.isArray(salary.amount)){
    salary.amount.push(25000);
}