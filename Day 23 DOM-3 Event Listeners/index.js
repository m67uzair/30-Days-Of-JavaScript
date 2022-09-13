// let button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//   console.log("e gives the event listener object:", e);
//   console.log("e.target gives the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });

// button.addEventListener("mouseenter", (e) => {
//   console.log("e gives the event listener object:", e);
//   console.log("e.target gives the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });

let regex = /^\d+$/g;

let input = document.querySelector("input");
input.style.display = 'block'
// input.style.marginLeft = '10px'
input.style.marginRight = '10px'
input.style.width = '70%'
input.style.height = '30px'



let button = document.querySelector('button')
let value = -1;
let pTag = document.querySelector('p');
pTag.style.color = 'red';
pTag.style.position = 'relative'; 
pTag.style.width = '100%'; 
pTag.style.left = '93px'; 
pTag.style.fontSize = '14px';


button.style.height = '35px'
button.style.marginBottom = '15px'

wrapperDiv = document.querySelector(".wrapperDiv");
wrapperDiv.style.maxWidth = "60%";
wrapperDiv.style.justifyContent = "center";
wrapperDiv.style.height = "20%";
wrapperDiv.style.display = "flex";
wrapperDiv.style.flexWrap = "wrap";

wrapperDiv.style.margin = "0 auto";


button.addEventListener('click',()=>{
  if (input.value == '') {
    pTag.innerHTML = 'Please Enter A Valid Number Value.'
  }
  else if(input.value.match(regex) == null){
    pTag.innerHTML = 'Input Value Must Be A Number'
  }
  value = input.value;

  for (let i = 0; i <= value; i++) {
    div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "#f64ee4";
    div.style.margin = "1px";
    div.style.textAlign = "center";
    div.style.lineHeight = "50px";
  
    div.textContent = i;
    wrapperDiv.appendChild(div);
  }
  

});

console.log(value);

