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

        if (data.meals == null) {
            return false;
        }

        return data;
    } catch (error) {
        console.error(error);
    }   
}

function displayMeal(data) {
    data.meals.forEach(e => {
        console.log(`${e.strMeal}\n`);
        for (let i = 1; i <= 20; i++) {
            let ingredient = e[`strIngredient${i}`];
            let measure = e[`strMeasure${i}`];
            if (ingredient == "" || ingredient == null) {
                break;
            }
            console.log(`${measure} ${ingredient}`);
        }
        console.log(`\n${e.strInstructions}`);
    });
}

async function main() {
    console.log("Welcome to Recipe Finder");
    const rl = readline.createInterface({input, output});
    let answer = await rl.question("Would you like to search for a recipe? (y/n) ");

    while (answer != "y" && answer != "n") {
        console.log("That is not a valid option please try again.");
        answer = await rl.question("Would you like to search for a recipe?  ");
    }   

    rl.close();

    if (answer == "n") {
        return;
    }

    let data = await fetchMeal();

    while (data == false) {
        console.log("That meal is not available. Please try again.");
        data = await fetchMeal();
    }

    displayMeal(data);
}

await main();