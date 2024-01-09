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
  function display() {
    console.log("Displays the new property Iselderly if age is greater than 45")
const updateRecord=people.map(person=>({...person, isElderly:person.age>45,}));
console.log(updateRecord);
    console.log("Displays the new array containing the ages of each person in an array");
const ages = people.map(person1=>person1.age);
console.log(ages);
    console.log("Displays the new array containing the location of each person in an array");
const locations = people.map(person2=>person2.location);
console.log(locations);
    console.log("Displays the new array containing the Names of each person in an array");
const names=people.map(person=>person.name);
console.log(names);}

display();