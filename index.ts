#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let todoList = [];
let conditions = true;

console.log(chalk.bgMagenta.bold("\n \t Welcome to Bismillah Kanwal - Todo-List Application\n"));

 while(conditions){
     let addTask = await inquirer.prompt([
         {
             name : "task",
             type : "input",
             message :chalk.green( "Enter Your New Task :")
         }
     ]);
     todoList.push(addTask.task);
     console.log(`${addTask.task} Task added in Todo-List successfully`);
    
     let addMoreTask = await inquirer.prompt([
         {
             name : "addMore",
             type : "confirm",
             message : "Do you want to Add more Task ?",
             Default : "False"
         }
     ]);
     conditions = addMoreTask.addMore
 }
 console.log("Your updated Todo-List :", todoList);
