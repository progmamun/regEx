// create a regular expression
const re = /foo/;
const re1 = new RegExp(/foo/);

// string regex functions
const matches = 'aBC'.match(/[A-Z]/g);
// Output: Array [B, C]

const index = 'aBC'.search(/[A-Z]/);
// Output: 1

const next = 'aBC'.replace(/a/, 'A');
// Output: ABC

/////=== Password Validation ===///
//// passwords to contain a capital letter, lowercase letter, number, and min length of 8.
const re2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

'1sMyPasswordOK?'.search(re);

//// ==== Hex Codes === ///
// find all of the hex codes, such as CSS colors, useful if you need to analyze the color scheme.

const re3 = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

'color: #ffffff; color: #000000;'.match(re);
