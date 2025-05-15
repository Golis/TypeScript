export{}

interface SimpleJob {
    codingLanguage: string,
    sourceControl: string
}

interface ComplicatedJob extends SimpleJob {
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

let complicatedJob: ComplicatedJob = { 
    codingLanguage: 'TS', sourceControl:'git', hasManyMeetings:true, reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

interface MeetingHolder  {
    meetingMaxLenght: number,
    holdMeeting:() => void
}

class ProjectManager implements MeetingHolder{
    
    meetingMaxLenght = 60;
    holdMeeting = () => {
        console.log('Just holding a meeting');
    }

    endMeeting = () => {
        console.log('Finally the meeting ended');
    }
}