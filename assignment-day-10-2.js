const constants = [2.72, 3.14, 9.81, 37, 100];
//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
//Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
//Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;
console.log(
  `width:${width},height:${height},area:${area},perimeter:${perimeter}`
);

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
//Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  const keys = { name, scores, skills, age };
  console.log(Object.keys(keys));
}

//find the persons who have less than two skills
const lessThanTwoSkills = [];
for (const { name, skills } of users) {
  if (skills.length < 2) {
    lessThanTwoSkills.push({ name, skills });
  }
}
console.log(lessThanTwoSkills);

//Destructure the countries array print name, capital, population and languages of all countries
const countriesInfo = [
  {
    name: "India",
    capital: "Delhi",
    population: "1.39 billion",
    languages: ["Hindi", "Marathi", "Kannad", "Tamil"],
  },
  {
    name: "France",
    capital: "Paris",
    population: "67 million",
    languages: ["french"],
  },
  {
    name: "US",
    capital: "Washington, D.C.",
    population: "330 million",
    languages: ["English", "Spanish"],
  },
];
for (const { name, capital, population, languages } of countriesInfo) {
  console.log(
    `name:${name},capital:${capital},population:${population},languages:${languages}`
  );
}
//7. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//8. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTML", "CSS", "JS", "Node"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "Node"], [85, 80, 85, 80]],
];
function convertArrayToObject(students) {
  const result = [];

  for (const [name, skills, scores] of students) {
    const student = {
      name,
      skills,
      scores: {
        HTML: scores[0],
        CSS: scores[1],
        JS: scores[2],
        Node: scores[3],
      },
    };
    result.push(student);
  }

  return result;
}

const studentsObject = convertArrayToObject(students);
console.log(studentsObject);

/*9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets*/
const studentSkills = {
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
const newStudent = JSON.parse(JSON.stringify(studentSkills));

const {
  skills: { frontEnd, backEnd, dataBase, dataScience },
} = newStudent;
frontEnd.push({ skill: "Bootstrap", level: 8 });
backEnd.push({ skill: "Express", level: 9 });
dataBase.push({ skill: "SQL", level: 8 });
dataScience.push("SQL");
