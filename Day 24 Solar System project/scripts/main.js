let body = document.body;
let h1Tag = document.querySelector("h1");
let weightInput = document.querySelector("input");
let selectTag = document.querySelector("select");
let buttonTag = document.querySelector("button");
let header = document.querySelector("header");
let mainDiv = document.querySelector("main");
let container = document.querySelector(".flex-container");
let imgDiv = document.querySelector(".image");
let img = document.querySelector("img");
let descriptionDiv = document.querySelector(".description");
let descriptionPara = document.querySelector("p");
let massDiv = document.querySelector(".mass");
let regex = /^\d+$/g;

body.style.cssText = "background-image: url(images/galaxy.gif)";
body.style.textAlign = "center";
body.style.fontFamily = "Montserrat";
body.style.color = "beige";

header.style.marginBottom = "20px";

h1Tag.style.color = "beige";
h1Tag.style.fontFamily = "Montserrat";
h1Tag.style.marginBottom = "60px";

// weightInput.style.color = "beige";
weightInput.style.height = "25px";
weightInput.style.fontFamily = "Montserrat";

selectTag.style.color = "grey";
selectTag.style.padding = "5px 10px";
selectTag.style.fontFamily = "Montserrat";

buttonTag.style.color = "beige";
buttonTag.style.padding = "5px 10px";
buttonTag.style.backgroundColor = "#463939";
selectTag.style.fontFamily = "Montserrat";

mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "center";

container.style.backgroundColor = "rgba(255,255,255,0.2)";
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.width = "80%";

img.style.maxWidth = "80%";
img.style.margin = "50px 0px";

// descriptionDiv.style.display = "none";
descriptionDiv.style.backgroundColor = "red";
descriptionDiv.style.padding = "0px 80px";
descriptionDiv.style.margin = "50px 30px";

massDiv.style.borderRadius = "50%"
massDiv.backgroundColor = "blue"

buttonTag.addEventListener("click", (e) => {
  console.log(weightInput.value);
  if (weightInput.value == "") {
    console.log(weightInput.value);
    img.style.display = "none";
    descriptionDiv.style.display = "block";
  } else if (weightInput.value.match(regex) == null) {
    descriptionPara.innerHTML = "Mass must be a number";
    img.style.display = "none";
    descriptionDiv.style.display = "block";
  } else if (selectTag.value == "none") {
    descriptionPara.innerHTML = "You did not select a country";
    img.style.display = "none";
    descriptionDiv.style.display = "block";
  }
  else if(selectTag.value=="mercury"){
    img.style.display = "block"
    img.src = "images/mercury.png"
    descriptionPara.innerHTML = "The weight of the object on <strong>MERCURY</strong>"
  }
});
