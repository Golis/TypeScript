export{}

type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = {
    codingLanguage: string,
    sourceControl: string,
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

type QaJob = {
    scriptingLanguage: string,
    hasAutomatedTests: true
}

let simpleJob: SimpleJob = {codingLanguage: 'TS', sourceControl: 'git'}

let complicatedJob: ComplicatedJob = { 
    codingLanguage: 'TS', sourceControl:'git', hasManyMeetings:true, reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

let qaJob: QaJob = { scriptingLanguage: 'Python', hasAutomatedTests: true}

simpleJob = complicatedJob;

//complicatedJob = simpleJob;

complicatedJob = simpleJob as ComplicatedJob;

complicatedJob = <ComplicatedJob>simpleJob;

const complicatedJobMadeInSteps = {} as ComplicatedJob
complicatedJobMadeInSteps.codingLanguage = 'TS'
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = 'git'