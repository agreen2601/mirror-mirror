let outputEl = document.getElementById("first")
let outputEl2 = document.getElementById("second")

let fieldEl = document.getElementById("message");

fieldEl.addEventListener("keyup", function (event) {
    outputEl.textContent = event.target.value
})

fieldEl.addEventListener("keyup", function (event) {
    outputEl2.textContent = event.target.value
})