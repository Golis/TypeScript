export{}

//Función de validación
function getAgeValue(arg: unknown): number{
    if(typeof arg === 'number'){
        return arg;
    }
    if(typeof arg === 'string'){
        return Number(arg);
    }
    throw new Error(`Unsupported format: ${JSON.stringify(arg)}`);
}