export{}

type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = SimpleJob & {
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

let complicatedJob: ComplicatedJob = { 
    codingLanguage: 'TS', sourceControl:'git', hasManyMeetings:true, reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

type MeetingHolder = {
    meetingMaxLenght: number,
    holdMeeting:() => void
}

class ProjectManager implements MeetingHolder{
    
    meetingMaxLenght = 60;
    holdMeeting = () => {
        console.log('Just holding a meeting');
    }
}