#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 25000;
let mypin = 2142;

let myanswer = await inquirer.prompt([
  {
    message: "Enter Your Four Digit PIN",
    type: "number",
    name: "Pin",
  },
]);
if (myanswer.Pin === mypin) {
  console.log("Your Pin Is Correct");

  let typeacc = await inquirer.prompt([
    {
      name: "Accounttype",
      message: "Please Select Account Type",
      type: "list",
      choices: ["Current Account", "Saving Account"],
    },
  ]);

  let operationsAns = await inquirer.prompt([
    {
      name: "oprations",
      message: "Please Select any Option",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

  if (operationsAns.oprations === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > mybalance) {
      console.log("Insufficent Balance");
    } else {
      console.log`Your Withdrawal Ammount is ${amountAns.amount}`;
      mybalance -= amountAns.amount;
      console.log`Your Remaining Balance is ${mybalance}`;
    }
  } else if (operationsAns.oprations === "Check Balance") {
    console.log`Your Current Balance is ${mybalance}`;
  }
      
} else {
  console.log(" INCORRECT PIN");
}
