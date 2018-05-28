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

// Question 1 (alert, variable, prompt, if/elseif, strings)
alert('You are invited to my house for dinner and are the first to arrive.');

var jollof = prompt("You are presented with a choice of a) Ghana jollof or b) Naija jollof. Which do you pick? (Type 'a' or 'b')");

if (jollof == 'a') {
    alert('Ghana Jollof, yummy!!! So now your tummy is full and you are happy and satisfied');
  } else if (jollof == 'b') {
    alert('Naija jollof???? Ghana jollof is tastier so I served you that anyway...');
  }

//Question 2 (alert, variable, prompt, switch statements, strings)
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



// Bridge
alert("Now let's see how well you know me!");

// Quiz
