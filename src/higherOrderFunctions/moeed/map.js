import { people } from "../../data";
console.log("*************** MOEED MAP IMPLEMENTATION ****************");

//  Add new property in each object called `isElderly` which will be boolean (true or false). If age is greater than 45 then elderly should be true else false
const peopleWithIsElderlyProperty = people.map((person) => ({
  ...person,
  isElderly: person.age > 45,
}));
console.log("people with elderly property ", peopleWithIsElderlyProperty);

//  Create new array with only ages of the people i.e. [23, 43, 45, ....]
const ages = people.map((person1) => person1.age);
console.log("people ages ", ages);

//  Create new array with  combination of city and state of each person i.e. ["New York, NY", "Los Angeles, CA", "Chicago, IL", ....]
const locations = people.map((person) => {
  if (person.location) {
    return `${person?.location?.city}, ${person.location?.state}`;
  } else {
    return "Location information not available";
  }
});
console.log("people locations ", locations);

//  Create new array with only names of the people i.e. ["John", "Jane", "Bob", ....]
const names = people.map((person) => person.name);
console.log("people names ", names);

// export { peopleWithIsElderlyProperty, ages, locations, names };
console.log("############Destructuring#############");
//Array that display new property isElderly using destructuring
const newProp = people.map((person)=>({
  ...person,
  isElderlyWithDestructuring: person.age>45,
}));
console.log(newProp);

//Array that display the name using destructuring
const namesWithDestruct = people.map(({name})=>name);
console.log(namesWithDestruct);

//Array that display ages
const agesWithDestruct = people.map(({age})=>age);
console.log(agesWithDestruct);

//Array that display the combine location of each person
const locationsWithDestruct = people.map(({location})=>(location? `${location.city}, ${location.state}`: "Location information is not available"));
console.log(locationsWithDestruct);
/*console.log("################ filter Method ################");
const peopleInNewYork = people.filter((person) => person.location && person.location.city === "New York").map((person) => person.name);
console.log(peopleInNewYork);*/