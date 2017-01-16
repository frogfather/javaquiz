#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

answer:
My name is Keith

The variable 'name' is declared outside, and hence can be seen by the printName function. 
```

### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

answer:
3

Although score is declared as a global variable and set to 5, the function 'result' will overwrite this value (I assume a local variable within a function will take precedence over a global one with the same name.)
```

### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

answer: [0:Ducks 1:Dogs 2:Lions];

The array myAnimals inside the function is declared globally so it'll take precedence over the one outside it. This would happen even if it hadn't been declared globally.


```

### Episode 4

```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

answer:
Suspects include: Jay, Val, Harvey, Rick
Suspect three is Keith

Although the function allSuspects changes suspectThree to Harvey that change is only visible within the function. The line to output suspect 3 is outwith the function so it uses the values set before the function.
```

### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

answer:
Poirot

The detective's name is changed by the function detectiveInfo which passes the modified hash 'detective' to the function printName. If we didn't pass printName anything as a parameter it would print the value of name declared above the two functions.

```

### Episode 6
```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

answer:
the murderer is , rick

although the murderer variable in the inner function has global scope it's called by the outer function whos murderer variable is local to the function and therefore can't be seen outside it. The line to print the murderer therefore uses the variable declared outside the functions. 

(confession time: I ran this one in terminal to check answer)

```

### Episode 7 - Make up your own episode/s!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var murderer = 'rick';

var outerFunction = function() {
   murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
