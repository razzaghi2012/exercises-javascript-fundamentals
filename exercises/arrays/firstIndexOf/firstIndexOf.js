/**
 * Given an array and a value, returns the index of the first occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * firstIndexOf([10, 20, 30, 20], 20); // => 1
 * firstIndexOf([10, 20, 30, 20], 17); // => -1
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 0
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the first occurrence of the value in the
 *  array, or -1 if it's not found.
 */

 /** Arian's thoughts
1. you have to iterate thru an array
2. you have to use the anchor as a way to find what you're looking for
3. if the loop finds the value from the anchor you gave it, then it will return the position of that value in the loop
4. so we have to return something to the extent of the position of the array
5. else if we don't see this we must return -1
  */


function firstIndexOf(haystack, needle) {
  for (let i = 0 ; i < haystack.length ; i++ ) {
    let currentValue = haystack[i];
    console.log (currentValue);
    if (needle === currentValue) {
      return haystack.indexOf(needle);
    }
    else {
      return -1;
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for firstIndexOf:');

  //sanity 1 --- should return ==> 2// 
  console.log(firstIndexOf(['apple', 'pie','love'],'love'));

  //sanity 2 --- should return ==> -1//
  console.log(firstIndexOf(['apple', 'pie','love'],'nada'));


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

/**
 * checking my sanity here
 * i know this isn't working because i should not be getting -1 for both sanity checks. My guess is that there is something wrong with the operant
 * i see from the terminal that console.log (currentValue) ==> apple so it doesn't seem to be iterating through the loop?
 * maybe my loop inst working because in the terminal i don't see each value of apple, pie, love come out. 
 */

module.exports = firstIndexOf;
