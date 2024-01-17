console.log("################ filter Method ################");
////All students living in New York
const peopleInNewYork = people.filter((person) => person.location && person.location.city === "New York").map((person) => person.name);
console.log(peopleInNewYork);

//All Senior citizens (age > 45)
const peoplesSeniorCitizens = people.filter((person) => person.age > 45).map((person)=>person.name);
conole.log(peoplesSeniorCitizens);