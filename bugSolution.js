function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b; // Now this will be numeric addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // throws an error