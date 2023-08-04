/**
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumber(nums) {
	let result = 0
	for (const num of nums) {
		result ^= num
	}
	return result
}

/**
 * Write a function that takes in a string of one or more words, and returns the same string,
 *  but with all five or more letter words reversed (Just like the name of this Kata).
 *  Strings passed in will consist of only letters and spaces.
 *  Spaces will be included only when more than one word is present.

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
 */
function spinWords(string) {
	//TODO Have fun :)
	let wordsList = string.split(' ');
	for (let i = 0; i < wordsList.length; i++) {
		if (wordsList[i].length >= 5) {
			wordsList[i] = wordsList[i].split("").reverse().join("");
		}
	}
	return wordsList.join(' ');
}

/**
 * In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
	@description
	 l.filter(e => Number.isInteger(e));
 */

function filter_list(l) {
	// Return a new array with the strings filtered out
	return l.filter(i => typeof i != 'string')
}

/**
 * 
 * @param {*} n 
 * @returns 
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
@description
 parseInt(n.toString().split('').sort().reverse().join(''), 10);
  parseInt(String(n).split('').sort().reverse().join(''))
 */


function descendingOrder(n) {
	let str = n.toString().split('');
	return parseInt(str.sort().reverse().join(''))
}