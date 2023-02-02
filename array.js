const country = 'bangladesh';
const age ='54';
const FriendsAge = [23,32, 23, 23,4, 4, 42, 24,];




console.log(typeof country);

console.log(typeof age);

console.log(FriendsAge.includes(6));
console.log(FriendsAge.includes(42));

// if (friendsAge.indexOf(55)  !== -1 ) {
    
// }


console.log(Array.isArray(FriendsAge));



// concat
const newFriendsAge = [23,33, 233, 5,34,53,23, 55,223,];
const  allFriendsAge = newFriendsAge.concat(FriendsAge);
console.log(allFriendsAge);