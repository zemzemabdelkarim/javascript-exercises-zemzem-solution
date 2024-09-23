const calcAge = function (person){

    if( !("yearOfDeath" in person) ){
        const date = new Date;
        return date.getFullYear() - person.yearOfBirth;
    }else{
        return person.yearOfDeath - person.yearOfBirth;
    }
}
const findTheOldest = function(people) {
    let theOldest = people[0];
    people.forEach(e => {
        
        if( calcAge(e) > calcAge(theOldest) ){
            theOldest = e;
        }

    });
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
