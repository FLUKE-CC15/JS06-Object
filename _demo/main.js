// ###########################
// ####Objeat Declaration#####
// ###########################

let user = {
    first: 'Fluke',
    Last: 'Wacharin',
    age: 5000,
    isAdmin: true,
    'Like human': true,
};

//##############################
//####Access,Modify,Delete######
//##############################

//#######Get,Poll,Read##########

console.log(user);
console.log(user.first)
console.log(user.first === 'Fluke');

//Modify, Update
user.first = 'FIX';
console.log(user.first);
user.age = 25;
user.age += 2;

user.add = 'BKK'
console.log(user);

// #####################
// ####Nested Object####
// #####################

const Employee = {
    Fullname: 'Fluke',
    salary: 5_000_000,
    address: {
    district: "Phaya Thai",
    province: 'bKK',
    country: 'Thailand',
    },
};

console.log(Employee.salary)
console.log(Employee.address)
console.log(Employee.address.province)
console.log(Employee.address.district)
console.log(Employee.address.Village)

// #####################
// #### Check key#######
// #####################

const product = {
    id: 277,
    name: 'Iphone',
    price: 50000000000,
    discount:0.05,
}

console.log(product.discount);
console.log('name' in product);
console.log('discount' in product);
console.log(product.hasOwnProperty('name'))
console.log(product.hasOwnProperty('discount'))

// ###########################
// ####BRacket Notation#######
// ###########################

console.log(product.id);
console.log(product['id'])

console.log(product['is mobile'])

product['name'] ='Iphone-15';

let aaaaa = 'name'







