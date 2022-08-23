const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
    productRating: function (name, rate) {
      for (const product of products) {
        if (product.name == name) {
          return product.ratings.push({ userId: this._id, rate: rate });
        }
      }

      return "Product Doesnt exist";
    },
    likeProduct: function (name) {
      for (const product of products) {
        if (product.name == name) {
          if (product.likes.includes(this._id)) {
            return product.likes.splice(
              product.likes.indexOf("this._id"),
              1
            );
          } else {
            return product.likes.push(this._id);
          }
        }
      }
      return "Product Doesnt Exist";
    },
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
    productRating: function (name, rate) {
      for (const product of products) {
        if (product.name == name) {
          return product.ratings.push({ userId: this._id, rate: rate });
        }
      }

      return "Product Doesnt exist";
    },
    likeProduct: function (name) {
      for (const product of products) {
        if (product.name == name) {
          if (product.likes.includes(this._id)) {
            return product.likes.splice(
              product.likes.indexOf("this._id"),
              1
            );
          } else {
            return product.likes.push(this._id);
          }
        }
      }
      return "Product Doesnt Exist";
    },
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
    productRating: function (name, rate) {
      for (const product of products) {
        if (product.name == name) {
          return product.ratings.push({ userId: this._id, rate: rate });
        }
      }

      return "Product Doesnt exist";
    },
    likeProduct: function (name) {
      for (const product of products) {
        if (product.name == name) {
          if (product.likes.includes(this._id)) {
            return product.likes.splice(
              product.likes.indexOf("this._id"),
              1
            );
          } else {
            return product.likes.push(this._id);
          }
        }
      }
      return "Product Doesnt Exist";
    },
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
    productRating: function (name, rate) {
      for (const product of products) {
        if (product.name == name) {
          return product.ratings.push({ userId: this._id, rate: rate });
        }
      }

      return "Product Doesnt exist";
    },
    likeProduct: function (name) {
      for (const product of products) {
        if (product.name == name) {
          if (product.likes.includes(this._id)) {
            return product.likes.splice(
              product.likes.indexOf("this._id"),
              1
            );
          } else {
            return product.likes.push(this._id);
          }
        }
      }
      return "Product Doesnt Exist";
    },
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
    productRating: function (name, rate) {
      for (const product of products) {
        if (product.name == name) {
          return product.ratings.push({ userId: this._id, rate: rate });
        }
      }

      return "Product Doesnt exist";
    },
    likeProduct: function (name) {
      for (const product of products) {
        if (product.name == name) {
          if (product.likes.includes(this._id)) {
            return product.likes.splice(
              product.likes.indexOf("this._id"),
              1
            );
          } else {
            return product.likes.push(this._id);
          }
        }
      }
      return "Product Doesnt Exist";
    },
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const dog = {
  name: "tommy",
  legs: 4,
  color: "brown",
  age: 12,
  bark: function () {
    return `woof woof!!! ${this.name}`;
  },
};

dog.breed = "golden retriever";
dog.getDogInfo = function () {
  let pado = `Hi, I'm ${this.name}, I am ${this.age} years old ${this.breed} with ${this.color} color. My hobbies are ${this.bark}`;

  return pado;
};

// console.log(users);

const values = Object.values(users);
let maxSkills = 0;
let object = Object.keys(users);
let pado = "";

for (let i = 0; i < values.length; i++) {
  if (values[i].skills.length > maxSkills) {
    maxSkills = values[i].skills.length;
    pado = object[i];
  }
}

// console.log(`${pado} has the most skills (${maxSkills})`);

const entries = Object.entries(users);
let loggedInCount = 0;
let greaterThan50PointsCount = 0;

for (let i = 0; i < entries.length; i++) {
  if (entries[i][1].isLoggedIn) {
    loggedInCount++;
  }
  if (entries[i][1].points >= 50) {
    greaterThan50PointsCount++;
  }
}

// console.log(loggedInCount);
// console.log(greaterThan50PointsCount);
let mernStackDevelopers = [];

for (let i = 0; i < entries.length; i++) {
  if (
    entries[i][1].skills.includes("MongoDB") &&
    entries[i][1].skills.includes("Express") &&
    entries[i][1].skills.includes("React") &&
    entries[i][1].skills.includes("Node")
  ) {
    mernStackDevelopers.push(entries[i][0]);
  }
}

// console.log(mernStackDevelopers);

// Imagine you are getting the above users1 collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

function includes(val) {
  for (let user of users1) {
    if (val == user.email) {
      return true;
    }
  }

  return false;
}

//48 to 57 digits
//97 to 122 small abc
// 65 to 90 capital abc
function generateId() {
  let smallAbc = [];
  let digits = [];
  let allChars = [];
  let char;
  let id = "";

  for (let i = 97; i <= 122; i++) {
    char = String.fromCharCode(i);
    smallAbc.push(char);
  }

  for (let i = 48; i <= 57; i++) {
    char = String.fromCharCode(i);
    digits.push(char);
  }

  allChars = smallAbc.concat(digits);

  for (let i = 0; i < 6; i++) {
    id += allChars[Math.floor(Math.random() * 36 + 1)];
  }

  return id;
}

function signUp(email, password) {
  const _id = generateId();
  const username = email.slice(0, email.indexOf("@"));
  let date = new Date();

  if (includes(email)) {
    return "An account is already registered with this username";
  }

  users1.push({
    _id: _id,
    username: username,
    email: email,
    password: password,
    createdAt: date.toLocaleString("en-US", {}),
    isLoggedIn: false,
  });

  return users1;
}
signUp("pado@alex.com", "pado");

function signIn(email, password) {
  for (const user of users1) {
    if (user.email == email) {
      if (user.password == password) {
        user.isLoggedIn = true;
        return `WELCOME!! ${user.username}`;
      } else {
        return "INCORRECT PASSWORD";
      }
    }
  }

  return "User doesnt exist";
}

console.log(users1[3].likeProduct("TV"));
console.log(products);
