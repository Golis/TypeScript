export {}

type Founder = {
    name: 'Javier Navarro',
    car: 'Porche'
} | {
    name: 'Rodrigo',
    bike: 'Orbea'
}

function meetTheFounder(founder: Founder){
    console.log(`Meet your founder ${founder.name}`)
    if(founder.name === 'Javier Navarro'){
        console.log(`I drive a ${founder.car}`)
    }
    if(founder.name === 'Rodrigo'){
        console.log(`I don't drive so I use my bike called ${founder.bike}`)
    }
}

meetTheFounder({
    name: 'Javier Navarro',
    car: 'Porche'
})

meetTheFounder({
    name: 'Rodrigo',
    bike: 'Orbea'
})