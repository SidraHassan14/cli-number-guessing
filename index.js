#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    }
]);
// Conditional Statement
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations!! You guessed the correct number!");
}
else {
    console.log("Sorry You guessed the wrong number!");
}
