// Long weekend homework
// Level 1 (Mandatory)
//
// To create a complex story using various control flow methods. It must:
//
// use every Data Type (integers, arrays, objects etc)
// use if, if/else, if/else, if/else and Switch statements
// use every comparison operator (<, >, <=, >= etc)
// use at least one multiple condition per statement if( true && true ) OR if( true || false )
// Use as many in-built functions as possible:
// prompts and alerts are mandatory
// other methods like length, reverse, indexOf, substr, and any others you can find
// The story should be fun and entertaining!!
// HINT: Plan well before you start coding.
//
// The Repo name is Sparta-Control-Flow-Story



// STORY TIME

//intro
//
alert('Hey!! Welcome to my first ever game!');
alert('Let\'s get to know eachother a little before we play...');
var player = prompt('I\'m Mimi. What\'s your name?');
alert('Hi ' + player + '! Nice to meet you!');
var age = prompt('How old are you?');
var difference = (parseInt(age) - 31);
if (difference >= 1) {
  alert(age + '...You are older than me!');
} else if (difference < 0){
  alert(age + '...You are younger than me');
} else if (difference == 0){
  alert(age + '!...We are the same age! Twins!!')
}
alert('Anyway, let\'s get back to the game')
//
//
// Question 1 (alert, variable, prompt, if/elseif, strings)
alert('You are invited to my house for dinner and are the first to arrive.');

var jollof = prompt("You are presented with a choice of a) Ghana jollof or b) Naija jollof. Which do you pick? (Type 'a' or 'b')");

if (jollof == 'a') {
    alert('Ghana Jollof, yummy!!! So now your tummy is full and you are happy and satisfied');
  } else if (jollof == 'b') {
    alert('Naija jollof???? Ghana jollof is tastier so I served you that anyway...');
  }
//
// //Question 2 (alert, variable, prompt, switch statements, strings)
alert('You must be so thirsty now that you are full and satisfied.');

var drink = prompt('If you could drink anything you want, what would it be?').toUpperCase();

switch (drink) {
  case 'SUPERMALT':
    alert('The fridge is full, help yourself. The opener is on the fridge. get me one too!')
    break;
  case 'WATER':
    alert('The fridge is full, help yourself.')
    break;
  case 'TEA':
    alert('Go and pop the kettle on. Mugs and teabags are in cabinet above it!')
    break;
  default:
    alert('We nuh \'ave dat! Go look in fridge and see if theres anything you like.')
}

// //Question 3 ()

alert('You go to the kitchen to find my mum helping my siblings do their maths homework.')
alert('She starts to read the question out loud:')
alert('You are sent to the shop to buy some items. ')
alert('Chicken: £3.29, Potatoes: £1, Eggs: £1.20, Chocolate bar: £0.80, Milk: £1, Cheese: £0.79, Frankfurter: £2, Brioche rolls: £1.16')
var homework = prompt('Question: What was the third item on the shopping list?').toUpperCase;
if (homework == "EGGS") {
  alert('Woohoo! I see you were paying attention!!');
} else {
  alert('Why?!?!?! Did your teacher die early??? (SMH!)')
}

// // Bridge
alert("Now let's see how well you know me!");

Quiz

var quizAnswer = {}
// // var correctAnswer = {one: "c", two: "c", three: "a", four: "a", five: "c"}

// //a
quizAnswer.one = prompt('Which famous rapper do I share a birthday with?  a)LL Cool J  b)JayZ  c)Tupac');
if (quizAnswer.one == 'c') {
  alert('Correct!');
} else {
  alert('WRONG!');
}
// //b
quizAnswer.two = prompt('What date in June is my birthday?  a)6th  b)10th  c)16th');
if (quizAnswer.one == 'c') {
  alert('Correct!');
} else {
  alert('WRONG!');
}
// //c
quizAnswer.three = prompt('Which Hexcode represents my favourite colour?  a)#f6aeaa  b)#515151  c)#acaeaa');
if (quizAnswer.one == 'a') {
  alert('Correct!');
} else {
  alert('WRONG!');
}
// //d
quizAnswer.four = prompt('Which countries am I from?  a) Ghana and England  b)Ghana and Nigeria  c)Ghana and Brazil');
if (quizAnswer.one == 'a') {
  alert('Correct!');
} else {
  alert('WRONG!');
}
// //e
quizAnswer.five = prompt('What is my favourite shop in the whole world?  a)Nike Store  b)World Duty Free  c)IKEA');
if (quizAnswer.one == 'c') {
  alert('Correct!');
} else {
  alert('WRONG!');
}
//
console.log(quizAnswer);
//
// //Quiz Score
var score = prompt('What was your score?');

if (score == 5) {
  alert('Yay! We\'re besties now!!:D');
} else if (score <= 4 && score >= 2) {
  alert('I think you need to get to know me better...');
} else if (score <= 1) {
  alert('I thought you were my friend...');
}
//
//
// //Outro
alert('I hope you had fun... Thanks for playing my game with me!');
alert('Bye ' + player );
