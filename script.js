// script.js

let btn = document.querySelector("#Add");
let status = document.querySelector("h5");
let check = 0;

btn.addEventListener("click", function () {
  if (check === 0) {
    status.innerHTML = "Friends";
    status.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "#e0e0e0";
    btn.style.color = "#111";
    check = 1;
  } else {
    status.innerHTML = "Stranger";
    status.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "#00bfa6"; // new color (aqua/turquoise)
    btn.style.color = "#fff";
    check = 0;
  }
});
