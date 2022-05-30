// Create one destructuring expression that declares exactly one variable
// to retrieve x.A[2]. Return the value in a new variable called A_2.

let x = {
  A: ['t', 'e', 's', 't']
};

//Write your Code here
let { A : [ , , A_2 ] } = x;

console.log(A_2)