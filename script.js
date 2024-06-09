const colorbox = document.querySelector("#circle");
const btn = document.querySelector("#btn");
const colorname = document.querySelector(".color-name");

let arr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let color = "";
btn.addEventListener("click", function() {
    color = "#";
    for (let i = 0; i < 6; i++) {
        color += arr[Math.floor(Math.random() * arr.length)];
        }
        colorname.innerText = color;
        colorbox.style.background = color;
});