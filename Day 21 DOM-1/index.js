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

date.toLocaleDateString;

body.style.fontFamily = "Roboto, sans-serif";

mainDiv.style.width = "max-content";
mainDiv.style.margin = "0 auto";

h2.innerHTML = '<a href="https://www.pado.com">' + h2.innerHTML + "</a>";
h2.style.fontSize = "16px";
h2.style.textAlign = "center";

year.style.fontSize = "2em";
year.style.fontWeight = "900";

console.log(date);

setInterval(() => {}, 1000);
