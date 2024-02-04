const fs = require("fs");
const inquirer = require('fix-esm').require('inquirer');
const path = require('path');
const generateSvgLogo = require("./utils/generateSvgLogo");

const questions = [
    {
        type: "input",
        name: "text",
        message: "What text would you like? (Max 3 characters)",
        validate: (value)=> {
            if(value.length <= 3) {
                return true
            } else {
                return 'Input exceeded, please type 3 characters'
            }
        }
    },
    {
        type: "list",
        name: "text-colour",
        message: "What colour would you like your text to be?",
        choices: ["Red", "Orange", "Yellow", "Green", "Purple"],
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["Square", "Circle", "Triangle"],
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue!!'
            }
        } 
    },
    {
        type: "list",
        name: "shape-colour",
        message: "What colour would you like your shape to be?",
        choices: ["Red", "Orange", "Yellow", "Green", "Purple"],
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
         console.log("Creating logo.svg file ... :)");
        writeToFile("./dist/logo.svg", generateSvgLogo({ ...responses}));
       
    });
}

init();