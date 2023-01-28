// get the counter variable
let countValue = document.getElementById("count-value");
let count = 0;

function increase() {
count += 1;
countValue.textContent = count;
// console.log(count);
}

//getting the paragraph
let entry = document.getElementById("entries")
// console.log(entry);

function save() {
let textValue = count + " - ";
// console.log(textValue);
entry.innerHTML += textValue;
countValue.textContent = 0;
count = 0;
}