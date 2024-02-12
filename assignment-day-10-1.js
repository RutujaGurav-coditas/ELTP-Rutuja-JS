//Create an empty object called cow
const cow = {};
//Print the the cow object on the console
console.log(cow);
//Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow.name = "Bessie";
cow.legs = 4;
cow.color = "black and white";
cow.age = 5;
cow.sound = function () {
  return "maaah maaah";
};
//Get name, legs, color, age and sound value from the cow object
const { name, legs, color, age, sound } = cow;
const cowSound = sound();
console.log(
  `name:${name},legs:${legs},color:${color},age:${age},sound:${cowSound}`
);
//Set new properties the cow object: breed, getCowInfo()
cow.breed = "Hariana";
cow.getcowInfo = function () {
  return `name:${name},legs:${legs},color:${color},age:${age},sound:${cowSound}`;
};
console.log(cow);
const getCowInformation = cow.getcowInfo();
console.log(getCowInformation);

//Find the person who has many skills in the users object.
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
const findPersonWithMostSkills = function () {
  let maxSkills = 0;
  let personWithMostSkills = null;
  for (const person in users) {
    const { skills } = users[person];
    const skillsCount = skills.length;
    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      personWithMostSkills = person;
    }
  }
  return personWithMostSkills;
};
console.log(findPersonWithMostSkills());

//Count logged in users, count users having greater than equal to 30 points from the following object.
const countLoggedInUsers = function () {
  let count = 0;
  for (const user in users) {
    const { isLoggedIn } = users[user];
    if (isLoggedIn) {
      count++;
    }
  }
  return count;
};
console.log(countLoggedInUsers());
const countUsersWithPoints = function () {
  let count = 0;
  for (const user in users) {
    const { points } = users[user];
    if (points >= 30) {
      count++;
    }
  }
  return count;
};
console.log(countUsersWithPoints());
//Find people who are MERN stack developer from the users object
const findMernDevelopers = function () {
  const mernDevelopers = [];
  for (const user in users) {
    const { skills } = users[user];
    if (
      skills.includes("MongoDB") &&
      skills.includes("Express") &&
      skills.includes("React") &&
      skills.includes("Node")
    ) {
      mernDevelopers.push(user);
    }
  }
  return mernDevelopers;
};
console.log(findMernDevelopers());
//Set your name in the users object without modifying the original users object
const myInfo = {
  Rutuja: {
    email: "rutugurav123@gmail.com",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    age: 22,
    isLoggedIn: true,
    points: 60,
  },
};
const updatedUsers = { ...users, ...myInfo };
console.log(updatedUsers);
//Get all keys or properties of users object
console.log(Object.keys(users));
//Get all the values of users object
console.log(Object.values(users));
//Use the countries object to print a country name, capital, populations and languages.
const countries = {
  country_name: "India",
  capital: "Delhi",
  populations: 20000000,
  languages: ["Hindi", "Marathi", "Kannad", "Tamil"],
};
const { ...country_data } = countries;
console.log(country_data);
/*Create an object called personAccount. It has firstName, lastName, 
incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
addExpense and accountBalance methods.Incomes is a set of incomes and its 
description and expenses is a set of incomes and its description.*/
const personAccount = {
  firstName: "Rutuja",
  lastName: "Gurav",
  incomes: {
    salary: 15000,
    freelancing: 5000,
  },
  expenses: {
    rent: 4000,
    groceries: 2000,
    travel: 2000,
  },
  totalIncome() {
    let total = 0;
    const { incomes } = personAccount;
    for (const income in incomes) {
      total += incomes[income];
    }
    return total;
  },
  totalExpense() {
    let total = 0;
    const { expenses } = personAccount;
    for (const expense in expenses) {
      total += expenses[expense];
    }
    return total;
  },
  accountInfo() {
    const { totalIncome, totalExpense, firstName, lastName } = personAccount;
    const accountBalance = totalIncome - totalExpense;
    return `Account Information for ${firstName} ${lastName}: \nTotal Income: $${totalIncome}\nTotal Expense: $${totalExpense}\nAccount Balance: $${accountBalance}`;
  },
  addIncome(description, amount) {
    const { incomes } = personAccount;
    personAccount.incomes = { ...incomes, [description]: amount };
  },
  addExpense(description, amount) {
    const { expenses } = personAccount;
    personAccount.expenses = { ...expenses, [description]: amount };
  },
};
console.log(personAccount.accountInfo);

//Imagine you are getting the below users array of objects.
const persons = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
/*Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account.*/
const newUser = {
  _id: "gfyygyy",
  username: "rutu",
  email: "rutugurav123@gmail.com",
  password: "11011212",
  createdAt: "18/01/2023 10:00 AM",
  isLoggedIn: false,
};
const signUp = function () {
  // Check if the user already exists
  let userExists = false;
  for (const user of persons) {
    if (persons.email === newUser.email) {
      userExists = true;
      break;
    }
  }
  if (userExists) {
    console.log("User already has an account.");
    return;
  } else {
    persons.push(newUser);
    console.log("User signed up successfully!");
  }
};
signUp(newUser.email);

//Create a function called signIn which allows user to sign in to the application
userEmail = "rutugurav123@gmail.com";
userPassword = "11011212";
const signIn = function () {
  let user;
  for (const currentUser of persons) {
    if (
      currentUser.email === userEmail &&
      currentUser.password === userPassword
    ) {
      user = currentUser;
      break;
    }
  }
  if (!user) {
    console.log("Invalid email or password. Please try again.");
    return;
  } else {
    user.isLoggedIn = true;
    console.log("User signed in successfully!");
    return user;
  }
};
signIn();
//The products array has three elements and each of them has six properties.
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
/*The products array has three elements and each of them has six properties.*/
//Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rating) {
  const product = products.find((product) => product._id === productId);

  if (product) {
    product.ratings.push({ userId: userId, rate: rating });
    console.log("Rating added successfully.");
  } else {
    console.log("Product not found.");
  }
}

rateProduct("aegfal", "fg12cy", 4.5);
console.log(products);

//Create a function called averageRating which calculate the average rating of a product
function averageRating() {
  const sumOfRatings = products.reduce((total, product) => {
    // Use another reduce to sum up all ratings of each product
    const productTotal = product.ratings.reduce(
      (accumulator, rating) => accumulator + rating.rate,
      0
    );
    return total + productTotal;
  }, 0);

  // Calculate the average rating
  const average =
    sumOfRatings /
    products.reduce((total, product) => total + product.ratings.length, 0);

  return average || 0; // Return 0 if there are no ratings
}

const findAverageRating = averageRating();
console.log(findAverageRating);

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  const { _id, likes } = products;
  const product = products.find((product) => product._id === productId);
  if (!product) {
    console.log("product not found");
  }
  const userLiked = product.likes.includes(userId);
  if (userLiked) {
    likes.splice(product.likes.indexOf(userId), 1);
    console.log("like removed");
  } else {
    product.likes.push(userId);
    console.log("like added");
  }
}
likeProduct("eedfcf", "hedfcg");
