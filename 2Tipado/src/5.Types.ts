export{}

type Position = 'Programmer' | 'HR';

type Colleague = {
    name: string;
    age: number;
    position: Position;
    greetBack?: Function
}

const myColleague: Colleague = {
    name: 'Ricardo',
    age: 30,
    position: 'Programmer',
}

const myOtherColleague:{
    name: string;
    age: number;
    position: Position;
    task: string[];
} = {
    name: 'Josep',
    age: 30,
    position: 'HR',
    task:['HR stuff']
}

const myTalkyColleague: Colleague = {
    name: 'Rodrigo',
    age:30,
    position: "Programmer",
    greetBack: ()=>{
        console.log('Cheers!!!')
    }
}

function greetColleague(colleague: Colleague):void{
    console.log('Hi ' + colleague.name);
    if(colleague.greetBack){
        colleague.greetBack();
    }
}

greetColleague(myColleague);
greetColleague(myOtherColleague);
greetColleague(myTalkyColleague);