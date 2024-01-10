const people = [
  {
    name: "John",
    age: 30,
    location: {
      city: "New York",
      state: "NY",
    },
  },
  {
    name: "Jane",
    age: 25,
    location: {
      city: "Los Angeles",
      state: "CA",
    },
  },
  {
    name: "Bob",
    age: 40,
    location: {
      city: "Chicago",
      state: "IL",
    },
  },
  {
    name: "Mary",
    age: 35,
    location: {
      city: "Houston",
      state: "TX",
    },
  },
  {
    name: "Mike",
    age: 45,
    location: {
      city: "Philadelphia",
      state: "PA",
    },
  },
  {
    name: "Sara",
    age: 55,
    location: {
      city: "San Antonio",
      state: "TX",
    },
  },
  {
    name: "David",
    age: 60,
    location: {
      city: "Dallas",
      state: "TX",
    },
  },
  {
    name: "Jane",
    age: 40,
    location: {
      city: "New York",
      state: "CA",
    },
  },
  {
    name: "Sarah",
    age: 50,
    location: {
      city: "Austin",
      state: "TX",
    },
  },
  {
    name: "John",
    age: 30,
    location: {
      city: "New York",
      state: "NY",
    },
  },
  {
    name: "Joseph",
    age: 66,
  },
];

//  Add new property in each object called `isElderly` which will be boolean (true or false). If age is greater than 45 then elderly should be true else false
const peopleWithIsElderlyProperty = people.map((person) => ({
  ...person,
  isElderly: person.age > 45,
}));

//  Create new array with only ages of the people i.e. [23, 43, 45, ....]
const ages = people.map((person1) => person1.age);

//  Create new array with  combination of city and state of each person i.e. ["New York, NY", "Los Angeles, CA", "Chicago, IL", ....]
const locations = people.map((person2) => {
  return person2.location;
});

//  Create new array with only names of the people i.e. ["John", "Jane", "Bob", ....]
const names = people.map((person) => person.name);
