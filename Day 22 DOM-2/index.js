// const asabenehChallenges2020 = {
//   description: 'Asabeneh Yetayeh challenges',
//   challengeTitle: 'Asabeneh Yetayeh challenges',
//   challengeSubtitle: '30DaysOfJavaScript Challenge',
//   challengeYear: 2020,
//   keywords: [
//     'HTML',
//     'HTML5',
//     'CSS',
//     'CSS3',
//     'JS',
//     'JavaScript',
//     'ES6',
//     'Promise',
//     'async await',
//     'Database',
//     'React',
//     'React Hooks',
//     'Context API',
//     'React Router',
//     'Web Storage',
//     'localStorage',
//     'sessionStorage',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'SQL',
//     'API',
//     'DOM',
//     'data science',
//     'MERN',
//     'Python',
//     'Flask',
//     'Statistics',
//     'Linear Algebra',
//     'Numpy',
//     'Pandas',
//     'Scipy',
//     'Scikit-learn',
//     'Visualization',
//     'D3.js'
//   ],
//   author: {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     titles: [
//       ['🌱', 'Educator'],
//       ['💻', 'Programmer'],
//       ['🌐', 'Developer'],
//       ['🔥', 'Motivator'],
//       ['📔', 'Content Creator']
//     ],
//     qualifications: [
//       'MSc. Computer Science Ongoing',
//       'BSc. Information and Communication Eng.',
//       'MSc. Food Technology',
//       'BSc.Food Technology'
//     ],
//     socialLinks: [
//       {
//         social: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/asabeneh/',
//         fontawesomeIcon: '<i class="fab fa-linkedin">'
//       },
//       {
//         social: 'Twitter',
//         url: 'https://twitter.com/Asabeneh',
//         fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
//       },
//       {
//         social: 'Github',
//         fontawesomeIcon: '<i class="fab fa-github-square"></i>',
//         url: 'https://github.com/Asabeneh'
//       },
//       {
//         social: 'DEV.to',
//         fontawesomeIcon: '',
//         url: 'https://dev.to/asabeneh'
//       }
//     ],
//     skills: [
//       'Web Development',
//       'Data Analysis',
//       'Data Visualization',
//       'Programming',
//       'Databases',
//       'Developing API'
//     ],
//     bio:
//       'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
//   },
//   challenges: [
//     {
//       name: '30 Days Of Python',
//       topics: [
//         'Python',
//         'Flask',
//         'Numpy',
//         'Pandas',
//         'Statistics',
//         'API',
//         'MongoDB'
//       ],
//       days: 30,
//       status: 'Done',
//       questions: 'Above 500',
//       projects: 'Two',
//       interviewQns: '',
//       githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
//     },
//     {
//       name: '30 Days Of JavaScript',
//       topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
//       days: 30,
//       status: 'Ongoing',
//       questions: 'Above 500',
//       projects: 'About 30',
//       interviewQns: '',
//       githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
//     },
//     {
//       name: '30 Days Of HTML & CSS',
//       topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
//       days: 30,
//       status: 'Coming',
//       questions: 'Above 500',
//       projects: 'Two',
//       interviewQns: '',
//       githubUrl: ''
//     },
//     {
//       name: '30 Days Of React',
//       topics: [
//         'React',
//         'React Router',
//         'Redux',
//         'Context API',
//         'React Hooks',
//         'MERN'
//       ],
//       days: 30,
//       status: 'Coming',
//       questions: '',
//       projects: '',
//       interviewQns: '',
//       githubUrl: ''
//     },
//     {
//       name: '30 Days Of ReactNative',
//       topics: ['ReactNative', 'Redux'],
//       days: 30,
//       status: 'Coming',
//       questions: '',
//       projects: 'Two',
//       interviewQns: '',
//       githubUrl: ''
//     },
//     {
//       name: '30 Days Of Fullstack',
//       topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
//       days: 30,
//       status: 'Coming',
//       questions: '',
//       projects: '',
//       interviewQns: '',
//       githubUrl: ''
//     },
//     {
//       name: '30 Days Of Data Analysis',
//       topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
//       days: 30,
//       status: 'Coming',
//       questions: '',
//       projects: '',
//       interviewQns: '',
//       githubUrl: ''
//     },
//     {
//       name: '30 Days Of Machine Learning',
//       topics: [
//         'Python',
//         'Numpy',
//         'Pandas',
//         'Scikit-learn',
//         'Scipy',
//         'Linear Algebra',
//         'Statistics',
//         'Visualization'
//       ],
//       days: 30,
//       status: 'Coming',
//       questions: '',
//       projects: '',
//       interviewQns: '',
//       githubUrl: ''
//     }
//   ]
// }

let body = document.getElementsByTagName("body")[0];
let year = document.getElementsByTagName("span")[0];
let mainDiv = document.getElementsByClassName("wrapper")[0];
let h2 = document.getElementsByTagName("h2")[0];
let date = new Date().toLocaleString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
});
let ul = document.getElementsByTagName("ul")[0];
let li = document.getElementsByTagName("li");

body.style.fontFamily = "Roboto, sans-serif";

mainDiv.style.width = "max-content";
mainDiv.style.margin = "0 auto";

h2.innerHTML = '<a href="https://www.pado.com">' + h2.innerHTML + "</a> ";
h2.style.fontSize = "16px";
h2.style.textAlign = "center";

year.style.fontSize = "2em";
year.style.fontWeight = "900";

date.toLocaleDateString;
let dateDiv = document.createElement("div");
dateDiv.innerHTML = `${date}`;
h2.after(dateDiv);

dateDiv.style.maxWidth = "max-content";
dateDiv.style.margin = "0 auto";
dateDiv.style.padding = "5px 10px";

let randomColor;

const randClr = () => {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + randomColor;
  return randomColor;
};

setInterval(() => {
  year.style.color = randClr();
  dateDiv.style.backgroundColor = randClr();
}, 1000);

ul.style.listStyle = "none";

for (let i = 0; i < li.length; i++) {

  li[i].style.padding = "20px 25px";
  if(i != li.length-1)
  li[i].style.marginBottom = "2px"

  if (i == 0) {
    li[i].style.backgroundColor = "#5BBC7A";
    console.log(i);
  }
  else if (i==1) {
    li[i].style.backgroundColor = "#F7DC5C";
    console.log(i);
  } else {
    li[i].style.backgroundColor = "#EB695B";
    console.log(i);
  }
}



// wrapperDiv = document.createElement('div');
// document.body.appendChild(wrapperDiv);
// wrapperDiv.style.maxWidth = '50%'
// wrapperDiv.style.height = '20%'
// wrapperDiv.style.display = 'flex'
// wrapperDiv.style.flexWrap = 'wrap'

// wrapperDiv.style.margin = '0 auto'

// for (let i = 0; i <= 101; i++) {
//   div = document.createElement("div");
//   div.style.width = '50px'
//   div.style.height = '50px'
//   div.style.backgroundColor = '#f64ee4'
//   div.style.margin = '1px'
//   div.style.textAlign = 'center'
//   div.style.lineHeight = '50px'

//   div.textContent = i ;
//   wrapperDiv.appendChild(div);
// }
