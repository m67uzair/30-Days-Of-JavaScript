let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log("e gives the event listener object:", e);
  console.log("e.target gives the selected element: ", e.target);
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );
});

button.addEventListener("mouseenter", (e) => {
  console.log("e gives the event listener object:", e);
  console.log("e.target gives the selected element: ", e.target);
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );
});
