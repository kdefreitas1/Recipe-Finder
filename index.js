import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

let meal = "";

async function getMeal() {
    const rl = readline.createInterface({input, output});
    meal = await rl.question("Input Meal: ");
    rl.close();
}

async function fetchMeal() {
    try {
        await getMeal();
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.meals);
    } catch (error) {
        console.error(error);
    }   
}

async function main() {
    console.log("Welcome to Recipe Finder");
    const rl = readline.createInterface({input, output});
    let answer = await rl.question("Would you like to search for a recipe? (y/n) ");

    while (answer != "y" && answer != "n") {
        console.log("That is not a valid option please try again.");
        answer = await rl.question("Would you like to search for a recipe?  ");
    }   

    if (answer == "n") {
        rl.close();
        return;
    }

    rl.close();
}

await main();