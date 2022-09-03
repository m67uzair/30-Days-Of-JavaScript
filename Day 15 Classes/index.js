class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
const person3 = new Person("John", "Doe", 50, "Mars", "Mars city");

person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";

person2.setScore = 1;
person2.setSkill = "Planning";
person2.setSkill = "Managing";
person2.setSkill = "Organizing";

console.log(person1.getScore);
console.log(person2.getScore);

console.log(person1.getSkills);
console.log(person2.getSkills);
console.log(person3.getSkills);

console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());
console.log(person3.getPersonInfo());

console.clear();

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

console.log(s1);

s1.saySomething();
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

s2.saySomething();
console.log(s2.getFullName());
console.log(s2.getPersonInfo());

console.clear();

class Animal {
  constructor(species, age, legs, color, sound) {
    this.name = "bobby";
    this.species = species;
    this.breed = "";
    this.age = age;
    this.legs = legs;
    this.color = color;
    this.sound = sound;
  }

  getAnimalInfo() {
    let info = "";
    let addiontnalInfo = "";
    info = `This is ${this.name}, He is ${this.age} years old, has ${this.legs} legs, and has a ${this.color} color, His favorite sound is ${this.sound}`;
    addiontnalInfo =
      this.breed != "" && `. ${this.name} is a${this.breed}${this.species}`;

    return addiontnalInfo ? info + addiontnalInfo : info;
  }

  set setName(name) {
    this.name = name;
  }
  set setBreed(breed) {
    this.breed = ` ${breed} `;
  }

  get getName() {
    return this.name;
  }
  get getBreed() {
    return this.breed;
  }
}
const cat = new Animal("Cat", 4, 4, "Brown", "Meow");

console.log(cat);
console.log(cat.getAnimalInfo());

cat.setBreed = "Pussy";
cat.setName = "tommy";

console.log(cat.getAnimalInfo());

console.clear();

class PersonAccount{
  constructor(firstName, lastName, incomes,expenses){
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  totalIncome(){}
  totalExpense(){}
  accountInfo(){}
  addIncome(){}
  addExpense(){}
  accountBalance(){}
}

