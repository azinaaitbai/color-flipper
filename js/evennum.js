let numbers = [10, 23, 12, 21];

let even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) even.push(numbers[i]);
}

// Printing output
console.log(even);
