# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug stemming from the language's dynamic typing and loose type coercion rules. The `foo` function intends to add two numbers, but due to the implicit type conversion, string concatenation occurs when one argument is a string.  This can lead to unexpected results and subtle bugs that are difficult to find.

## Bug Description

The bug is in the `foo` function. When called with a number and a string, JavaScript automatically converts the number to a string, performing string concatenation rather than numeric addition. This behavior might not always be intuitive, and the result is unexpected.

## Bug Solution

The bug is solved by explicitly checking the types of the input arguments and performing a type conversion when necessary. In this specific scenario, you might want to only allow numbers or throw an error if a string is passed in.