import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

let meal = "";

async function getMeal() {
    const rl = readline.createInterface({input, output});
    const answer = await rl.question("Input Meal: ");
    console.log(`Output: ${answer}`);
    rl.close();
}

getMeal();