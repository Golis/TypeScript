function greet(name: string): string{
    return ('Hello' + name);
}

const diegoGreet = greet('Diego');

function greetToUpperCase(name:string): string{
    return ('Hello'+ name.toUpperCase());
}

function consoleGreetDiego(name:string = 'Diego'): void{
    console.log('Hello' + name.toUpperCase());
}

consoleGreetDiego();
consoleGreetDiego('Javier');

const greetToConsole = (name: string) =>{
    console.log('Hello' + name);
}

function greetMultiple(...names: string[]){
    names.forEach(name =>{
        greetToConsole(name);
    })
}

greetMultiple('Mohammed');
greetMultiple('Mohammed', 'Josep', 'Javi', 'Carlos');