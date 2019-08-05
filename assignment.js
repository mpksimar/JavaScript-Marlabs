//Print: All ID’s in an array example: [10, 15, 20, 25, 30, 35, 40]
var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
];

var getId= employees.map(function(value){
  return value.id
});
console.log(getId);


//Print: TOTAL no of years’ experience they all have
var totalExp = employees.reduce(function(count, years){
  return count + years.experience;
},0);
console.log(totalExp);

//Print: All employees whose experience is greater than 5 years
var greater = employees.filter(function(age){
  return age.experience>5;
});
console.log(greater);


//2 Fix to Print out ‘Kitty’
let cat = {
    catName: 'Kitty',
    sayName (catName) {
        console.log(this.catName);
    }
 }

 let sayName = cat.sayName;
console.log(cat.catName);

//3 Print: ‘Marlabs is in New Jersey’ (DO NOT create variables outside the User class)
class user {
    constructor(name, location) {
      this.name= name;
      this.location= location;
    }
      getValue(){
        return this.name + ' is in ' + this.location;
        }
}
let user1 = new user('Marlabs', 'New Jersey');

console.log(user1.getValue());

//4 Print: ‘My name is Althaf Pattan and I work for Marlabs’
function myName(fName, lName) {
    //console.log(`'my name is ${fName} ${lName}'`);

    function fullDetails(companyName) {
        const value = `'My name is ${fName} ${lName} and I work for ${companyName}'`;
        return value;
    }

    return fullDetails('Marlabs');
}
console.log(myName('Altaf', 'Pattan'));

//5 Print: ‘Pika Chu  loves sushi and algorithms’
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }

};
var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var pokemon1= pokemonName.bind(pokemon);
pokemon1('sushi', 'algorithms');



//6

var x = '5';
var promise1 = new Promise(function(resolve, reject) {
    if (x  = 5) {
        let data = {
            name: 'Marlabs',
            address: {
                state: 'NJ',
                zip: 084444
            }
        }
        console.log(data.name,"address:");
        resolve(data.address);
    } else {
        var res = new Error('failed......');
        reject(res);
    }
});

var promise2 = function(address) {
    var msg = address.state + ' ' + address.zip;
    return Promise.resolve(msg);
}

var myFunc = function() {
    promise1
    .then(promise2)
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });

};
  myFunc();
