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

/**
 * MAP:
 *
 * Add new property in each object called `isElderly` which will be boolean (true or false). If age is greater than 45 then elderly should be true else false
 * Create new array with only ages of the people i.e. [23, 43, 45, ....]
 * Create new array with  combination of city and state of each person i.e. ["New York, NY", "Los Angeles, CA", "Chicago, IL", ....]
 * Create new array with only names of the people i.e. ["John", "Jane", "Bob", ....]
 *
 */

/**
 * FILTER:
 *
 * All students living in New York
 * All Senior citizens (age > 45)
 */

/**
 * FIND: (What does find do)
 *
 * Find person named Jane living in New York
 * Find person named Bob living in Chicago
 * Find person aged 40
 *
 */

/**
 * REDUCE:
 *
 * Get the sum of all people's ages
 * Do All above MAP, FILTER, FIND using reduce method (all questions using reduce method)
 */
