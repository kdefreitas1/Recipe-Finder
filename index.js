import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

let meal = "";

async function getMeal() {
    const rl = readline.createInterface({input, output});
    meal = await rl.question("Input Meal: ");
    rl.close();
}

getMeal();