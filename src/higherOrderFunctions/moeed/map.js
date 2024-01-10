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
  if (person.location && person.location.city && person.location.state) {
    return `${person.location.city}, ${person.location.state}`;
  } else {
    return "Location information not available";
  }
});
console.log("people locations ", locations);

//  Create new array with only names of the people i.e. ["John", "Jane", "Bob", ....]
const names = people.map((person) => person.name);
console.log("people names ", names);

// export { peopleWithIsElderlyProperty, ages, locations, names };
