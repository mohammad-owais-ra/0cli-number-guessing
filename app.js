#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please select a number between 1-10",
        type: "Number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation You Guessed A Correct Number");
}
else {
    console.log("Oh no You Guessed Wrong Number");
}
if (answer.userGuessedNumber !== randomNumber) {
    console.log("The answer was", randomNumber);
}
