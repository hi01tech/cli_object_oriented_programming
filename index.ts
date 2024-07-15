#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name: string

    constructor (n: string){
        this.name = n
    }
}

class Person {
    students: Student[] = []

    addStudents(obj: Student){
        this.students.push(obj)
    }
}

const persons = new Person ()

const programStart = async (persons: Person) => {
    do{
    console.log("-".repeat(60));
    console.log(chalk.bold.rgb(255,255,146)  `\n\tWelcome to "hi01tech" Object Oriented Programing \n`);
    console.log("-".repeat(60) + "\n");

    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices:[{value: "Staff"},{value: "Student"},{value: "Exit"}]
    })
    if (ans.select == "Staff" ){
        console.log(chalk.rgb(260,180,199) ('\nYou approaced the staff room. Please feel free to ask any question.\n'));
        
    }
    else if (ans.select == "Student" ){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter the student name you want to engage with: ",
        }) 
        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudents(name)
            console.log(chalk.rgb(260,180,199)(`\nHello i am ${name.name}. Nice to meet you!`));
            console.log(chalk.bold.rgb(255,255,146)('\nNew student added'));
            console.log(chalk.bold.rgb(120,220,99) ('\nCurrent Student List: \n'));
            console.log(persons.students);
            console.log('\n');
        } else{
            console.log(chalk.rgb(260,180,199)(`\nHello i am ${student.name}. Nice to see you again!`));
            console.log(chalk.bold.rgb(120,220,99)('\nExisting Student List: \n'));
            console.log(persons.students);
            console.log('\n');
            
        }
    }else if (ans.select == "Exit" ){
        console.log(chalk.rgb(255,255,146) ("\nExiting the program..."));
        process.exit()
        
    }
    } while(true);
}

programStart(persons)
    