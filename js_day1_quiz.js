// Section 1

// What types are these?

/* 1.1 */ 1;
number
/* 1.2 */ "cat";
string
/* 1.3 */ true;
boolean
/* 1.4 */ [];
array
/* 1.5 */ {};
hash (naughty brackets)
/* 1.6 */ 1.1;
number
/* 1.7 */ var myVariable;
variable


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;
true
/* 2.2 */ "cat";
true
/* 2.3 */ true;
true
/* 2.4 */ NaN;
false
/* 2.5 */ [];
false (?)
/* 2.6 */ {};

/* 2.7 */ undefined;
false
/* 2.8 */ "";
false
/* 2.9 */ 0;
false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var x = 3.1;
// 3.2 Assign a variable that is a string
var name = "Steph";
// 3.3 Assign a variable that is a boolean
var blackAndWhite = false;
// 3.4 Assign a variable that is an object
var myObject = [1,2,3];

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
function hello(input){
  if (input = true){
    console.log("hello");
  }
  else {
    console.log("bye");
  }
}

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var anAnimal = animals[0];
// 5.2. Assign the last element to a variable
var anotherAnimal = animals[animals.length-1];
// 5.3. Assign the length of an array to a variable
var arrayLength = animals.length;
// 5.4. Add an item to the end of the array
animals.push("aardvark");
// 5.5. Add an item to the start of the array
animals.unshift("bear");
// 5.6. Assign the index of hedgehog to a variable
var theIndex = animals[animals.indexof("hedgehog")]; (this is probably wrong)

// Section 6

// 6.1 Create an array of 5 vegetables
var veggies = ["carrot","broccoli","cauliflower","green beans","aubergine"];
// 6.2 Loop over the array and write to the console using a "while"
function loopy(inputArray){
  var i=0;
  while (i < inputArray.length){
    console.log(inputArray[i]);
    i++;
  } 
}
// 6.3 Loop again using a "for" with a counter
function forVeggies(inputArray){
  for (var i=0; i<inputArray.length;i++){
    console.log(inputArray[i]);
  }
}
// 6.4 Loop again using a "for of"
function forOfVeggies(inputArray){
  for (veggie of veggies){
    console.log(veggie);   
  }
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// 7.1 Calculate the total cash in accounts
function getTotal(accounts){
  var total =0;
  for (account in accounts){
    total += account["amount"];
  }
  return total;
}
// 7.2 Find the amount of money in the account with the largest balance
function getLargestBalance(accounts){
  var largest = 0;
  for (account in accounts){
    if (account["amount"] > largest){
      largest = account["amount"];
    }
  return largest;
}
// 7.3 Find the name of the account with the smallest balance
function getNameOfSmallestBalance(accounts){
  var name;
  var smallest = accounts[0];
  for (account in accounts){
    if (account["amount"] < smallest){
      smallest = account["amount"];
      name = account["name"]
}
// 7.4 Calculate the average bank account value
function average(accounts){
  var total = getTotal(accounts)
  var average = total/account.length;
}
// 7.5 Find the value of marcs bank account
function accountValue(name){
  
}
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
