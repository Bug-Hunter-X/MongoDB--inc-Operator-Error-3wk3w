# MongoDB $inc Operator Bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  The provided `bug.js` file showcases incorrect usage leading to unexpected behavior. The `bugSolution.js` file offers the corrected implementation. This bug often arises from misunderstandings of how `$inc` interacts with negative values and field specifications.

## Bug Description
The `$inc` operator in MongoDB is used to increment or decrement a numerical value in a document.  However, if used incorrectly (e.g., with invalid field names or when decrementing below zero without proper handling), it can lead to errors or unintended results. The original code attempts to decrement the `counter` field but may not handle boundary conditions appropriately. 

## Solution
The solution involves verifying the field name, data type and potentially adding checks to prevent decrementing below a minimum value.