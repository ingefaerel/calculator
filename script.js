const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll(".btn-light, .operator");
const equalSign = document.getElementById("equal-sign");
const clear = document.getElementById("clear");

// displays the expression
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        inputField.value = inputField.value + buttons[i].value;
    });
}

// calculates the expression
equalSign.addEventListener("click", function () {
    let result;
    result = eval(inputField.value)
    inputField.value = result;
});


clear.addEventListener("click", function () {
    inputField.value = "";
})