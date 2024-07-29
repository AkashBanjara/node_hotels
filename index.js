const guestList = ['anil','naman','aryan','anil','vishnu','mukesh'];

function checkGuest(name){
    if(guestList.includes(name.toLowerCase())){
        console.log(`${name} is welcome to party!`)
    }else{
        console.log(`${name} is not welcome to party!`)
    }
}

const guestName = prompt('enter your name')

checkGuest(guestName);