// Expression bodies
export class Arrow {

}

console.log('\n\n\narrow==========================================================\n\n\n');


var evens = [0,2,4,6,8];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
console.log(odds, nums);

var fives = [];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
console.log(fives);

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ['friend A', 'friend B'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
// ds
bob.printFriends();
