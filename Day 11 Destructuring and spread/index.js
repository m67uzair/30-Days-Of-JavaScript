const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor

let [fin, est, sw, den, nor] = countries;

// console.log(fin,est,sw,den);

// Destructure the rectangle object by its properties or keys.

let { width, height: h, area, perimeter } = rectangle;

// console.log(width,h);

// Iterate through the users array and get all the keys of the object using destructuring

for (const { name, scores, skills, age } of users) {
  // console.log(name,scores,skills,age);
}

// Find the persons who have less than two skills
for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    // console.log(`${name} has less than 2 skills`);
  }
}

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

// let [name, skills, [htmlScore, cssScore, JsScore, reactScore]] = student;
// console.log(name, skills, JsScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayofArraysIntoArrayOfObjects(...array) {
  let studentsObjectArray = [];

  for (const student of array) {
    for (const [name, skills, scores] of student) {
      studentsObjectArray.push({ name, skills, scores });
    }
  }

  return studentsObjectArray;
}

function convertArrayIntoObject(...array) {
  for (const [name, skills, scores] of array) {
    return { name, skills, scores };
  }
}

let studentObject = convertArrayIntoObject(student);

/*
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/

// let newStudent = {...studentObject}; //copy one object into another

// console.log(newStudent);

const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let newStudent2 = {
  ...student2,
  skills: {
    ...student2.skills,
    frontEnd: [...student2.skills.frontEnd, { skill: "Bootstrap", level: 8 }],
    backEnd: [...student2.skills.backEnd, { skill: "Experss", level: 9 }],
    dataBase:[...student2.skills.dataBase, {skill: "SQL", level:8}],
    dataScience:[...student2.skills.dataScience, "SQL"]
  },
};

console.log(newStudent2);
