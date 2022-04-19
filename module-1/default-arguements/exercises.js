/*
Write a function that executes a callback function 
after a given delay in milliseconds. The default value of delay is one second.

The setTimeout() method can be used to 
specify the time delay before a function is executed.
*/

function executeCallback( callback, delay = 1000 ) {
  console.log('Delay: ' + delay);
  setTimeout(callback, delay)
}

//Edit above this line 
executeCallback( () => console.log('Done'));

/* 
Change the below code such that the second argument of printComment 
has a default value that’s initially 1, and is incremented by 1 after each call.

Select the show console button in the widget below to see your output.
*/

let count = 1
function printComment( comment, line = count++) {
  console.log( line, comment );
}


//Edit above this line
for (var i = 1; i <= 5; i++)
printComment('I should be lineNumber ' + i);