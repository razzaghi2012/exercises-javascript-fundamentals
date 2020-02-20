/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 /**
  * Arian's steps
  * ensure you go slow. check line by line. 
  * create a for loop and make sure you multiply the figures
  * return the final result of the multiplication
  */



function product(array) {
  let finalProduct = 1;
  for (i = 0; i <array.length; i++ ) {
    let currentNumber = array[i];
    finalProduct = finalProduct * currentNumber;
  } 
  return finalProduct;
}

/**
 * after a few trial and errors on the terminal i came up with the right answer. 

 what i did
terminal was giving me a NaN when i did  (let finalProduct = 1;)
then i googled what NaN was and realized it's a math failed function
So then thought well if i assign the value finalProduct to 0 then everything i multiply will be 0
I knew that was fishy so then said well what is something multiplied by 1,it's itself. 
so did that. 
not sure this is the best way to do it but i think it worked. 
 * 
 * 
 */



if (require.main === module) {
  console.log('Running sanity checks for product:');
  console.log (product([1,2,2])== 4);


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = product;
