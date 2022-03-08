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
