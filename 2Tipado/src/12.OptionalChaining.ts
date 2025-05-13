export {}

type Manager = {
    team?:{
        scrumMaster?:{
            holdScrumMeetings: () => void
        }
    }
}

function manage(manager: Manager){
    manager.team?.scrumMaster?.holdScrumMeetings();
}

function manageOld(manager: Manager){
    if(manager.team && manager.team.scrumMaster){
        manager.team.scrumMaster.holdScrumMeetings();
    }
}

//Mala práctica, no hacer, si lo vemos, corregir
function manageSure(manager: Manager){
    manager.team!.scrumMaster!.holdScrumMeetings();
}