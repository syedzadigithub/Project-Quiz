#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const quiz: {
    username:string,
    question_1:string,
    question_2:string,
    question_3:string,
    question_4:string,
    question_5:string,
    question_6:string,
    question_7:string,
    question_8:string,
    question_9:string,
    question_10:string

} = await inquirer.prompt([{
    name:"username",
    type:"input",
    message:"Enter your Name: ",
    validate:function(value ){
        if( value.trim() !== ""){
            return true;
        }else return "Please Enter your name first."
    }
},{
        name:"question_1",
        type:"list",
        message:"TypeScript is ? ",
        choices:["a) Case-sensitive","b) Case-insensitive","c) depends on TS version","d) None of above"]
},
{
    name:"question_2",
    type:"list",
    message:"TypeScript supports how many type of comments?",
    choices:["a) 1", "b) 2","c) 3", "d) 4"]
},{
    name:"question_3",
    type:"list",
    message:"How many components typescript has?",
    choices:["a) 5","b) 6","c) 3","d) 2"]
},
{
    name:"question_4",
    type:"list",
    message:"___ is a return type when nothing is returned ? ",
    choices:["a) void","b) any", "c) unknown","d) any[]"]
},{
   name:"question_5",
   type:"list",
   message:"Semicolons are optional in TypeScript.",
   choices:["a) Yes","b) No","c) Can be yes or no","d) NOT"]
},
{
    name:"question_6",
    type:"list",
    message:"Extension of typescript is?",
    choices:["a) .d.tp","b) .d.tc","c) .d.ty","d) .d.ts"]
},{
    name:"question_7",
    type:"list",
    message:"Which of the following are features of typeSript?",
    choices:["a) Typescript is portable","b) Typescript is just javascript","c) TypeScript supports other JS libraries","d) All of these"]
},{
    name:"question_8",
    type:"list",
    message:"Which of the following variable declaration cannot be redeclared and reassigned ? ",
    choices:["a) Var","b) let ","c)both a & b","d) const"]
},
{
    name:"question_9",
    type:"list",
    message:"What is the command used to compile TypeScript file into JavaScript ? ",
    choices:["a) jsc","b) npm","c) tsc","NOT"]
},
{
    name:"question_10",
    type:"list",
    message:"What is an array?",
    choices:["a) Collection of values","b) special type of object","c) both a & b","d) NOT"]
}]);

let score:number = 0;
// Condition for Q1
switch (quiz.question_1){
    case "a) Case-sensitive":
        console.log(chalk.green(`\n1. Correct!`));
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`\n1. Incorrect.`))
};
// Condition for Q2

switch (quiz.question_2){
    case "b) 2":
        console.log(chalk.green("2. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red.italic("2. Incorrect."))
};
// Condition for Q3

switch (quiz.question_3){
    case "c) 3":
        console.log(chalk.green("3. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`3. Incorrect.`))
           
};
// Condition for Q4

switch (quiz.question_4){
    case "a) void":
        console.log(chalk.green("4. Correct!"));
       
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`4. Incorrect.`))
           
};
// Condition for Q5

switch (quiz.question_5){
    case "a) Yes":
        console.log(chalk.green("5. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`5. Incorrect.`))
          
}
// Condition for Q6

;switch (quiz.question_6){
    case "d) .d.ts":
        console.log(chalk.green("6. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`6. Incorrect.`))
            
}
// Condition for Q7

;switch (quiz.question_7){
    case "d) All of these":
        console.log(chalk.green("7. Correct!"));
      ++score;
        break;
        default:
            console.log(chalk.red.italic(`7. Incorrect.`))
           
}
// Condition for Q8

;switch (quiz.question_8){
    case "d) const":
        console.log(chalk.green("8. Correct!"));
       
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`8. Incorrect.`))
         
}
// Condition for Q9

;switch (quiz.question_9){
    case"c) tsc" :
    console.log(chalk.green("9. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`9. Incorrect.`))
           
}
// Condition for Q10

;switch (quiz.question_10){
    case "c) both a & b" :
        console.log(chalk.green("10. Correct!"));
      
        ++score;
        break;
        default:
            console.log(chalk.red.italic(`10. Incorrect.\n`))
           
};

console.log(chalk.yellow(`${quiz.username} Your score is ${score} out of 10. `))