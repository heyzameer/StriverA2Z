// he JavaScript Map object is a collection of key-value pairs that maintains the insertion order of its elements. Here’s a rundown of the key methods and properties available for Map in JavaScript:

const map = new Map();

// Adding entries
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

// Accessing values
console.log(map.get('a')); // 1

// Checking existence
console.log(map.has('b')); // true

// Iterating through keys and values
for (const key of map.keys()) {
    console.log(key); // 'a', 'b', 'c'
}

for (const value of map.values()) {
    console.log(value); // 1, 2, 3
}

for (const [key, value] of map.entries()) {
    console.log(key, value); // 'a' 1, 'b' 2, 'c' 3
}

// Using forEach
map.forEach((value, key) => {
    console.log(key, value); // 'a' 1, 'b' 2, 'c' 3
});

// Deleting an entry
map.delete('b');

// Checking size
console.log(map.size); // 2

// Clearing the map
map.clear();
console.log(map.size); // 0
