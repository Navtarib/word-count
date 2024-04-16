#! /usr/bin/env node
import  inquirer from "inquirer"
const answer = await inquirer.prompt



const answers :{
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message : "Enter your sentnce to count the words"
    }
])

const words = answers.Sentence.trim().split(" ")

console.log(words);

console.log(`your sentence word count is ${words.length}`);
