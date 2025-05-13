export{}

class CompanyFounder{
    giveLongSpeechAboutCompanyPast(){
        console.log('It all started when...')
    }
}

class CompanyCEO{
    giveLongSpeechAboutHowTheTimesAreHard(){
        console.log('Thiings are hard but we can do it! ...')
    }
}

type LongSpeechGiver = CompanyFounder | CompanyCEO

function giveLongSpeech(speechGiver: LongSpeechGiver){
    //Esto falla porque todavía no se la clase que estoy recibiendo
    //speechGiver.giveLongSpeechAboutCompanyPast();
    if(speechGiver instanceof CompanyFounder){
        speechGiver.giveLongSpeechAboutCompanyPast();
    }
    if(speechGiver instanceof CompanyCEO){
        speechGiver.giveLongSpeechAboutHowTheTimesAreHard();
    }
}

giveLongSpeech(new CompanyFounder())
giveLongSpeech(new CompanyCEO())