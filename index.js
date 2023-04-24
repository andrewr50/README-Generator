// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const fileName = 'README.md';
// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the title of your project?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Please type your project description:',
		name: 'description',
	},
	{
		type: 'input',
		message: 'Please type your project installation instructions:',
		name: 'installation',
	},    
	{
		type: 'input',
		message: 'Please type your project usage info:',
		name: 'usage',
	},
	{
		type: 'checkbox',
		message: 'Please type your project license info:',
		name: 'license',
		choices: ['MIT license','Apache license','GPL license']
	},
	{
		type: 'input',
		message: 'Please type your project contributions:',
		name: 'contributions',
	},
	{
		type: 'input',
		message: 'Please type your project tests:',
		name: 'tests',
	},
	{
		type: 'input',
		message: 'Please input your GitHub username:',
		name: 'github',
	},
	{
		type: 'input',
		message: 'Please type your email address for questions on this project:',
		name: 'email',
	}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, generateMarkdown(data), err =>{
		if(err) console.log(err)});
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(function (data) {
	console.log('data received');
	writeToFile(fileName, data);
})
}

// Function call to initialize app
init();