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