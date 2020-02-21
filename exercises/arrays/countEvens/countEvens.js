/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */


 /**Arian's 
1. define what an even integer is
2. iterate through the array to fit the definition of an integer
3. save into a variable what the current count is for interger
4. if there is more than 1 add to the variable you saved to count
5. once you have looped through the array, return the total count you stored in the variable
  */


//console.log(countEvens([2,1,4,6])); //

 function countEvens(array) {
   let runningTotal= 0; 

   for (i=0 ; i < array.length ; i++) {
     let currentNumber= array[i]; 
     if (currentNumber % 2 == 0) {
       return runningTotal = runningTotal +1
     } else {
       return 0;
     }
   }

}

if (require.main === module) {
  console.log('Running sanity checks for countEvens:');
  
  console.log(countEvens([1,3,5]));
  console.log(countEvens([1,3,5])==0);
  console.log(countEvens([2,1,4,6]));
  console.log(countEvens([2,4,6])==3);

/**
 * debugging my own logic...
 * 1/ looks like the conditional is working as expected for the first two console.log prints
 * 2/ the issue is in adding the count of one of the evaluations. meaning i think this line is fucked        return runningTotal = runningTotal +1
i think it's the +1 i have here 
 * 
 */


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countEvens;
