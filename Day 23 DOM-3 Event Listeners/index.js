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
let input = document.querySelector("input");
input.style.display = 'block'
// input.style.marginLeft = '10px'
input.style.marginRight = '10px'
input.style.width = '70%'
input.style.height = '30px'



let button = document.querySelector('button')
let value = -1;

button.addEventListener('click',()=>{
  value = input.value;
});

button.style.height = '35px'
button.style.marginBottom = '15px'

wrapperDiv = document.querySelector(".wrapperDiv");
wrapperDiv.style.maxWidth = "60%";
wrapperDiv.style.justifyContent = "center";
wrapperDiv.style.height = "20%";
wrapperDiv.style.display = "flex";
wrapperDiv.style.flexWrap = "wrap";

wrapperDiv.style.margin = "0 auto";

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
