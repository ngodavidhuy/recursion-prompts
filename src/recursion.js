/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0 ) { return null; }
	return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	// let total = 0;
	// let copy = Array.prototype.slice.call(array);
	// if (!copy.length) {
	// 	return total;
	// } else {
	// 	let num = copy.pop();
	// 	return total + num + sum(copy);
	// }

	if (array.length === 0) {
		return 0;
	} else {
		return array[0] + sum(array.slice(1));
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number') {
			sum += array[i];
		} else if (Array.isArray(array[i])) {
			sum += arraySum(array[i]);
		}
	}
	return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
	n = Math.abs(n);
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n - 2);
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 1 || n === 0) {
		return 0;
	} else if (n < 0) {
		return n + 1 + sumBelow(n + 1);
	} else {
		return n - 1 + sumBelow(n - 1);
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	let array = [];
	let step = 1;

	if (x === y) { return array; } 
	if (x > y) { step = -1; } 
	if (x === y-(step)) { return array; } 

	return array.concat(x+step, range(x+step, y));

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	} else if (exp < 0) {
		return exponent(base, exp + 1)/base;
	} else {
		return base * exponent(base, exp - 1);
	}	
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1) {
		return true;
	} else if (n < 1) {
		return false;
	} else {
		return powerOfTwo(n/2);
	}
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string.length === 1 || string.length === 0) {
		return string;
	} else {
		return reverse(string.slice(1)) + string[0];
	}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(str) {
	str = str.toLowerCase();
	if (str.length === 0 || str.length === 1) {
		return true;
	}
	if (str[0] === str[str.length - 1]) {
		return palindrome(str.slice(1, str.length - 1));
	}
	return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (y === 0) { return NaN; }
	if (y < 0) { y = -y; }
	if (x < 0) { return -modulo(-x,y); }
	if (x < y) { return x; }
	return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (y === 0) {
		return 0;
	}
	if (y < 0) {
		return -x + multiply(x, y + 1);
	}
	return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) { return NaN; }
  if (x === 0) { return 0; }
  if (x < 0 && y > 0 && -x < y || x < -y) { return 0; }
  if (x > 0 && y > 0 && x < y) { return 0; }

  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  } else {
    return -1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // base cases
  if (x < 0 || y < 0) { return null; } 
  if (y % x === 0) { return x; }
  
  // recursive cases
  return x > y ? gcd(y, x) : gcd(x, y % x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1 === '' && str2 === '') {
		return true;
	} else if (str1[0] !== str2[0]) {
		return false;
	} else {
		return compareStr(str1.substring(1), str2.substring(1));
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (str.length === 0) {
		return [];
	} else {
		return [str[0]].concat(createArray(str.substring(1)));
	}
};

// 17. Reverse the order of an array
var reverseArr = function(arr) {
	if (arr.length === 0) {
		return [];
	}
	return [arr[arr.length - 1]].concat(reverseArr(arr.slice(0, arr.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if (!length) {
		return [];
	} else {
		return [value].concat(buildList(value, length - 1));
	}
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	let results = [];
	let val = n;

	//BASE CASE
	if (n === 0) { return results; }

	//RECURSIVE CASE
	if (n % 3 === 0) { val = 'Fizz'; }
	if (n % 5 === 0) { val = 'Buzz'; }
	if (n % 5 === 0 && n % 3 === 0) { val = 'FizzBuzz'; }
	results.push(val.toString());

	return fizzBuzz(n - 1).concat(results);

};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	let count = 0;
	//BASE CASE
	if (array.length === 0) {
		return count;
	}
	//RECURSIVE CASE
	if (array[0] === value) {
		count++;
	}
	return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	// let copy = [];

	// // BASE CASE
	// if (array.length === 0) {
	// 	return copy;
	// }

	// // RECURSIVE CASES
	// let element = array[0];
	// if (callback) {
	// 	element = callback(element);
	// 	copy.push(element);
	// 	return copy.concat(rMap(array.slice(1), callback));
	// }

	//BASE CASE
	if (array.length === 0) {
		return [];
	}

	return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {
// 	'e':{'x':'y'},
// 	't':{'r':{'e':'r'},
// 	'p':{'y':'r'}},
// 	'y':'e'
// };
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	let count = 0;
	for (let val in obj) {
		if (val === key) {
			count++;
		}
		if (typeof obj[val] === 'object') {
			count += countKeysInObj(obj[val], key);
		}
	}
	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	let count = 0;
	for (let key in obj) {
		if (obj[key] === value) {
			count++;
		}
		if (typeof obj[key] === 'object') {
			count += countValuesInObj(obj[key], value);
		}
	}
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (let key in obj) {
		if (key === oldKey) {
			obj[newKey] = obj[key];
			delete obj[key];
		}
		if (typeof obj[key] === 'object') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n <= 0) { return null; }

   if (n === 1) {
    return [0, 1];
  }

  if (n === 2) {
    return [0, 1, 1];
  }

  if (n === 3) {
    return [0, 1, 1, 2];
  }

  const arr = fibonacci(n - 1);
  arr.push( arr[arr.length - 1] + arr[arr.length - 2] );
  return arr;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n===0) {
    return 0;
  }
  if (n < 0) {
    return null;
  }
  if (n===1) {
    return 1;
  }
  return nthFibo(n-1) + nthFibo(n-2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if (array.length === 0) {
    return [];
  }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if (array.length === 0) {
		return [];
	}
	return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	let evenSum = 0;
	for (let key in obj) {
		if (obj[key] % 2 === 0) {
			evenSum += obj[key];
		}
		if (typeof obj[key] === 'object') {
			evenSum += nestedEvenSum(obj[key]);
		}
	}
	return evenSum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	if (array.length === 0) {
		return [];
	}
	if (typeof array[0] === 'object') {
		return flatten(array[0]).concat(flatten(array.slice(1)));
	}
	return [].concat(array[0], flatten(array.slice(1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	let object = (obj || {});
	let firstChar = str[0];

	if (str.length === 0) {
		return object;
	}

	if (!object[firstChar]) {
		object[firstChar] = 1;
	} else {
		object[firstChar]++;
	}

	return letterTally(str.slice(1), object);

};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	if (list.length === 0) {
		return [];
	}
	if (list[0] !== list[1]) {
		return [list[0]].concat(compress(list.slice(1)));
	}
	return [].concat(compress(list.slice(1)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	if (array.length === 0) {
		return [];
	}

	return [array[0].concat(aug)]
									.concat(augmentElements(array.slice(1), aug));

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if (array.length === 0) {
		return [];
	}
	if (array[0] === 0 && array[1] === 0) {
		return minimizeZeroes(array.slice(1));
	}

	return [array.shift()].concat(minimizeZeroes(array)); 
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if (array.length === 0) { return array; }
	if(array[0] < 0) { array[0] = -array[0]; }
	if(array[1] > 0) { array[1] = -array[1]; }
	return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	let numNameRef = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
	let arr = str.split(' ');

	if (arr.length === 1) {
		return (!isNaN(Number(arr[0]))) ? numNameRef[Number(arr[0])] : arr[0];
	}

	let strRet = (arr.slice(1).join(' '));

	return (!isNaN(Number(arr[0]))) ? (numNameRef[Number(arr[0])] + ' ' + numToText(strRet)) : (arr[0] + ' ' + numToText(strRet));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	
	min = min === undefined ? 0 : min;
	max = max === undefined ? array.length : max;
  
	if (min > max) {
		return null;
	}
  
  let mid = Math.floor(min + ((max - min) / 2));

	if (array[mid] === target) {
		return mid;
	}
  
  if (target > array[mid]) {
		return binarySearch(array, target, mid + 1, max)
	} else {
		return binarySearch(array, target, min, mid - 1);
	}
  
	return null;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(arr) {
	
	function merge(subLeft, subRight) {
		let sorted = [];
		while (subLeft.length > 0 && subRight.length > 0) {
			sorted.push( (subLeft[0] < subRight[0]) ? subLeft.shift() : subRight.shift() );
		}
		return sorted.concat(subLeft.length ? subLeft : subRight);
	}

	if (arr.length < 2) {
		return arr;
	}

	let mid = Math.floor(arr.length / 2);
	let subLeft = mergeSort(arr.slice(0, mid));
	let subRight = mergeSort(arr.slice(mid));

	return merge(subLeft, subRight);
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(item) {
	if (!item) { return item; } // null, undefined values check

    let types = [ Number, String, Boolean ];
    let result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function(type) {
        if (item instanceof type) {
            result = type( item );
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call( item ) === "[object Array]") {
            result = [];
            item.forEach(function(child, index, array) { 
                result[index] = clone( child );
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode( true );    
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    // it is an object literal
                    result = {};
                    for (let i in item) {
                        result[i] = clone( item[i] );
                    }
                }
            } else {
                // depending what you would like here,
                // just keep the reference, or create new object
                if (false && item.constructor) {
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
};
