// Exercise 2
// Part 1
// There are three people waiting for the bank.
// Their names, in order, are Sofia, David, and Juan.
// Create an array that has these three names in order.

let bankQueue = ["Sofia", "David", "Juan"];
let seeTeller = [];

// Part 2
// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller.
// What does the queue look like?
bankQueue.push("Sara", "Augustin");
seeTeller.push(bankQueue[0]);
bankQueue.shift();
console.log(bankQueue);
console.log(seeTeller);

// Part 3
// It turns out David was saving a spot for his friend Renata.
// She shows up and goes behind him in the line.
// One more person (Elena) shows up and goes to the end of the line.
// What does the queue look like?
bankQueue.splice(1, 0, "Renata");
bankQueue.push("Elena");
console.log(bankQueue);
