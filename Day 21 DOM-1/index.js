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
// let liDiv = document.createElement('div');
// li[0].parentNode.insertBefore(liDiv,li[0])
// console.log(liDiv.appendChild(li[0]));
