let count = 0;
let sum = 0;

const counter = document.querySelector(".counter");
const savePara = document.querySelector(".save-para");
const sumPara = document.querySelector(".sum-para");

const incrementBtn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");

incrementBtn.addEventListener("click", function () {
    count += 1;
    counter.innerHTML = count;
});

saveBtn.addEventListener("click", function () {
    savePara.innerHTML += `${count} - `;
    sum += count;
    sumPara.innerHTML = `Sum = ${sum}`;
    count = 0;
    counter.innerHTML = "0";
});
