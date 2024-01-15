console.log("################ filter Method ################");
const peopleInNewYork = people.filter((person) => person.location && person.location.city === "New York").map((person) => person.name);
console.log(peopleInNewYork);