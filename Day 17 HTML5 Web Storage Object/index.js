let skills = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);
console.log(skillJSON);
console.log(localStorage.getItem("skills"));
console.log(localStorage);

console.clear();

const user = {
  firstName: "Asabeneh",
  age: 250,
  skills: ["HTML", "CSS", "JS", "React"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);

// console.log(localStorage);
// console.log(localStorage.user);

localStorage.clear();

localStorage.setItem("firstName", "Muhammad Uzair");
localStorage.setItem("lastName", "Khuwaja");
localStorage.setItem("age", "22");
localStorage.setItem("country", "Pakistan");
localStorage.setItem("city", "Badin");

console.log(localStorage);

localStorage.clear();
console.clear();

const student = {
  firstName: "Muhammad Uzair",
  lastName: "Khuwaja",
  age: 22,
  skills: ["HTML", "CSS", "JS", "PHP", "FLUTTER"],
  enrolled: {
    courses: ["useless1", "useless2", "useless3"],
    duration: "4 years",
    remaining: "1 year",
  },
};

localStorage.setItem("student", JSON.stringify(student));

console.clear();

console.log(JSON.parse(localStorage.getItem("student")));
