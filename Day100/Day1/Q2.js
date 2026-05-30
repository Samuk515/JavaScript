// Day 2 challenge: profile Card + Birthday Game
const name= "Samir Singh" ;
const country = "Nepal";
let age = 21;
let score= 0;

// print the initial profile
console.log('=== Profile ===');
console.log('Name', name);
console.log('Country', country);
console.log('Age:',age);
console.log('Score',score);

age +=1;

score +=50;

//print the updated profile
console.log('=== After Birthday + Game ===');
console.log('Name', name);
console.log('Country', country);
console.log('Age:',age);
console.log('Score',score);

//Bonus : Create a const object for address and update the city
const address = {
    city: 'kathmandu',
    zip: '543454'
};
address.city = 'Lalitpur';
console.log('Update address:', address);

