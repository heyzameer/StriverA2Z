// Scope: var is function-scoped, while let and const are block-scoped.

// Hoisting: All are hoisted, but var is initialized with undefined, while let and const are not.

// Re-declaration: var can be re-declared, but let and const cannot be re-declared in the same scope.

// Initialization: var and let can be declared without initialization, but const must be initialized at the time of declaration.

// Re-assignment: var and let can be re-assigned, but const cannot be re-assigned.


// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code executes. This means that variables and functions can be used before they are declared in the code.


// Temporal Dead Zone (TDZ)
// The TDZ is the time between entering the scope and the variable being declared. Within this zone, accessing the variable results in a ReferenceError.


// Hoisting in JavaScript applies to let and const as well, but there is a key difference compared to var. While let and const declarations are indeed hoisted, they are not initialized until their actual declaration is encountered during runtime. This period between the start of the block and the declaration is known as the Temporal Dead Zone (TDZ). Accessing the variable in the TDZ results in a ReferenceError.





// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // Add an element to the top of the stack
//   push(element) {
//     this.items.push(element);
//   }

//   // Remove and return the top element of the stack
//   pop() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.pop();
//   }

//   // Return the top element of the stack without removing it
//   peek() {
//     if (this.isEmpty()) {
//       return "No elements in Stack";
//     }
//     return this.items[this.items.length - 1];
//   }

//   // Return true if the stack is empty
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Return the size of the stack
//   size() {
//     return this.items.length;
//   }

//   // Print the elements of the stack
//   printStack() {
//     let str = "";
//     for (let i = 0; i < this.items.length; i++) {
//       str += this.items[i] + " ";
//     }
//     return str.trim();
//   }
// }

// // Example usage
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.printStack()); // 10 20 30
// console.log(stack.peek());       // 30
// console.log(stack.pop());        // 30
// console.log(stack.printStack()); // 10 20
// console.log(stack.size());       // 2


