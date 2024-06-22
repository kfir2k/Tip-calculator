"use strict";
const inputAmount = document.querySelector("#inputAmount");
const tipAmount = document.querySelector("#tipAmount");
const form = document.querySelector("form");
form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        try {
            isUserInputValid(inputAmount.value);
            isUserInputValid(tipAmount.value);
        }
        catch (error) {
            console.log("error from ev", error);
            errorManagement("error CATCH PROBLEM");
        }
        inputAmount.value = "";
        tipAmount.value = "";
    }
    // console.log("test");
    // const userAmountSubmit = e.target
    // console.log(userAmountSubmit);
    //2
    //calcPrecent
});
function calcPrecent(amount, percentage) {
    const res = amount * ((percentage / 100) + 1);
    return Number(res.toFixed(2));
}
function isUserInputValid(input) {
    console.log(`input from isUserInputValid`, input, typeof (input));
    if (input === "") {
        throw new Error("Empty input from user");
    }
    const convertedInputToNumber = Number(input);
    if (Number.isNaN(convertedInputToNumber)) {
        throw new Error("input isnt a number from user");
    }
    if (convertedInputToNumber <= 0) {
        throw new Error("input cant be smaller than 0");
    }
    return true;
}
//UI -
function errorManagement(errorText) {
    console.log(errorText);
}
