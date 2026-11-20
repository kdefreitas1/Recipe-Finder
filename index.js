import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

async function fetchMeal(meal) {
    try {
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
    data.meals.forEach(meal => {
        console.log("\n----------------\n");

        console.log(`${meal.strMeal}\n`);

        console.log(`From ${meal.strCountry}`);

        console.log(`This is a ${meal.strCategory} dish\n`);
        
        console.log("Ingredients:\n");
        for (let i = 1; i <= 20; i++) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];
            if (ingredient == "" || ingredient == null) {
                break;
            }
            console.log(`${measure} ${ingredient}`);
        }
        console.log();

        console.log("Instructions:\n");
        let length = meal.strInstructions.split(".").length;
        let i = 0;
        meal.strInstructions.split(".").forEach(instruction => {
            i++;
            if (i == length || i == 1) {
                console.log(`${instruction}`);
            } else {
                console.log(`\n${instruction}`);
            }
        });

        console.log("----------------");
    });
}

async function getRandomMeal() {

}

async function main() {
    console.log("Welcome to Recipe Finder");
    const rl = readline.createInterface({input, output});
    let answer = await rl.question("Would you like to search for a recipe? (y/n) ");
    let looped = false;

    while (true) {
        while (answer.toLowerCase() != "y" && answer.toLowerCase() != "n") {
            console.log("That is not a valid option please try again.");
            if (looped) {
                answer = await rl.question("\nWould you like to search for another recipe? (y/n) ");
            } else {
                answer = await rl.question("\nWould you like to search for a recipe? (y/n) ");
            }
        }   

        if (answer == "n") {
            break;
        }

        let meal = await rl.question(`Input Meal (type "r" to get a random meal): `);

        if (meal.toLowerCase() == "r") {
            getRandomMeal();
            continue;
        }

        let data = await fetchMeal(meal);

        while (data == false) {
            console.log("\nThat meal is not available. Please try again.");
            meal = await rl.question("Input Meal: ");
            data = await fetchMeal(meal);
        }

        displayMeal(data);
        looped = true;
        answer = await rl.question("\nWould you like to search for another recipe? (y/n) ");
    }
        
    rl.close();
}

await main();