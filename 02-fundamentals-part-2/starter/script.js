// console.log("Part 2 is now working") 

// //function - declarations and Expressions
// console.log( ` === FUNCTIONS === `)

// function logger() {
//     console.log("My name is John Carl")
// }

// logger(); 
// logger(); 
// logger(); 

// function fruitProcessor(apples, oranges) {
//     console.log (apples, oranges)   
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// console.log(fruitProcessor(5, 3))

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);
// console.log(juice2);
// console.log(juice3);

// //function - expressions
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// };

// console.log(calcAge(2004));
// console.log(calcAge(1991));



// function introduce(firstName, lastName, age) {
//     const introduction = `Hi,  I'm ${firstName} ${lastName}, and I'm ${age} years old.`
//     return introduction;
// }

// console.log(introduce("John Carl", "Gajero", 20));

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} has already retired.`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "John Carl"));

// //global scope 
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar); 
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// console.log(globalVar);

  
// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   // Your code here
//   return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   // Your code here
//   // Remember: team needs DOUBLE the score to win
//   // Use template literals for nice output
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return "No team wins! Koalas: ";
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// part 2
// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grade = [ 85, 92, 78, 96, 88];
// console.log(grade);

// const friends = new Array("Michael", "Steven", "Peter");
// console.log(friends);

// const mixed = [ "Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);


// console.log(friends[0]);
// console.log(friends[2]); 

// console.log(friends.length);


// //
// friends [1] = "Jay";
// console.log(friends);

// const firsName = `John`;
// const john = [firsName, "Gajero", 2020 - 2004,];

// const calcAge = function(birthYear){

// }






// //Array Methods
// const newLength = friends.push("steven");
// console.log(friends)
// console.log(newLength)
// const newLength2 = friends.push("John");
// console.log(friends);

// //add the first item in a list
// friends.unshift("Maria")
// console.log(friends)


// //removing elements
// const popped = friends.pop ();
// const popped2 = friends.pop ();
// console.log(popped)
// console.log(popped2)
// console.log(friends);

// //find an element
// // IndexOf
// console.log(friends.indexOf ("Micheal"));
// console.log(friends.indexOf ("Maria"));
// console.log(friends.indexOf ("John"));

// // includes
// console.log(friends.includes("Michael"))
// console.log(friends.includes("Maria"))

// //array iteration - loops

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
// friends.forEach(function(friend, index) {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });


// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//   total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedcount = 0;
// grades2.forEach((grade) => {
//   if (grade >= 70) passedcount++;
// });
// console.log(`${passedcount} out of ${grades2.length} students passed.`);



// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);




/////////////////////////////////
// Hour 3

// Problems with arrays
const JohnArray = [
  "John",
  "Gajero",
  2025-2004,
  "Student",
  ["Michael", "Peter", "Steven"]
];

console.log(JohnArray[0]);
console.log(JohnArray[1]);

const JohnObject = {
  firstName: "John",
  lastName: "Gajero",
  age: 2025 - 2004,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"]
};

console.log(JohnObject);

// property access methods
// dot notation

console.log(JohnObject.firstName);
console.log(JohnObject.lastName);
console.log(JohnObject.age);

// bracket notation
console.log(JohnObject["firstName"]);
console.log(JohnObject["lastName"]);
console.log(JohnObject["age"]);

const nameKey = "Name";
console.log(JohnObject["first" + nameKey]);



/// Modifying Object Properties
JohnObject.job = "student";
JohnObject["age"] = 21;
console.log(JohnObject);


// Add new properties
JohnObject.location = "Philippines";
JohnObject["twitter"] = "@johncarlgajero";
JohnObject.hasdriversLicense = true;
console.log(JohnObject);


//when to use dot vs bracket notation
const property = "job";
console.log(JohnObject[property]);


/// Objects vs Arrays Decision Making

// Arrays
const listOfYears = [1991, 2004, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];


// Objects
const person = {
  name: "John",
  age: 20,
  occupation: "Student",
};
const car = {
  brand : "Toyota",
  model : "Corolla",
  year : 2020,
  color : "Blue",
}


// Objects can contains arrays, arrays can contain objects
const student = {
  name: "Sarah",
  grades: [85, 92, 78],
  address: 
    {
      street: "123 Main St",
      city: "New York", 
    },
}

console.log(student.grades[0]);
console.log(student.address.city);

// Object Methods

const John = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
hasDriversLicense: true,

calcAge: function (birthYear) {
  return 2025 - birthYear;
},
};

console.log(John.calcAge(1995));

// 'this' keyword
const JohnImproved = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
hasDriversLicense: false,

calcAge: function () {
 this.age = 2025 - this.birthYear;
 return this.age;
},

getSummary: function () {
  return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
},
};

console.log(JohnImproved.calcAge());
console.log(JohnImproved.age);
console.log(JohnImproved.getSummary());





// Complex object with multiple methods












////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    // Your code here
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    // Your code here
    this.friends.push({ name, status: status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    // Filter friends array to count only active friends
    // Hint: use this.friends.filter()
    // Your code here
    const activeFriends = this.friends.filter(friend => friend.status === "active");
    return activeFriends.length;
  },

  // Toggle active status
  toggleStatus: function () {
    // Switch this.isActive between true and false
    // Return the new status
    // Your code here
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
    const age = this.calcAge();
    const activeFriendsCount = this.getActiveFriends();
    const status = this.isActive ? "Active" : "Away";
    return `$(this.firstName) $(this.LastName) (${age}) from $(this.location)
    currently: $(status)
    $(activeFriends) active friends out of ${this.friends.length} total
    Interests: ${this.interests.join(",  ")}
    Connected and sharing life's adventures`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());
