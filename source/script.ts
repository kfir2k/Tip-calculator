const inputAmount = document.querySelector("#inputAmount") as HTMLInputElement
const tipAmount = document.querySelector("#tipAmount") as HTMLInputElement
const form = document.querySelector("form") as HTMLFormElement


form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {

        try {
            isUserInputValid(inputAmount.value)
            isUserInputValid(tipAmount.value)
        } catch (error) {
            console.log("error from ev", error);
            errorManagement("error")
        }


        inputAmount.value = ""
        tipAmount.value = ""
    }


    // console.log("test");

    // const userAmountSubmit = e.target
    // console.log(userAmountSubmit);

    //2
    //calcPrecent


})

function calcPrecent(amount: number, percentage: number) {

    const res: number = amount * ((percentage / 100) + 1)
    return Number(res.toFixed(2))


}








function isUserInputValid(input: any): boolean {
    console.log(`input from isUserInputValid`, input, typeof (input));
    if (input === "") {
        throw new Error("Empty input from user");
    }
    const convertedInputToNumber = Number(input)
    if (Number.isNaN(convertedInputToNumber)) {
        throw new Error("input isnt a number from user");
    }
    if (convertedInputToNumber <= 0) {
        throw new Error("input cant be smaller than 0");
    }

    return true

}


//UI
function errorManagement(errorText: string) {
    console.log(errorText);

}