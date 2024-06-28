const worker = new Worker("worker.js");

const calculateSum = () => {
    worker.postMessage("calculate");
};

worker.onmessage = function (msg) {
  alert(`sum is : ${msg.data}`)
};

let bg = "white";
const changeBG = () => {
  bg = bg === "green" ? "blue" : "green";
  document.body.style.backgroundColor = bg;
};

document.getElementById("sum").addEventListener("click", () => {
  calculateSum();
});

document.getElementById("bg").addEventListener("click", () => {
  changeBG();
});
