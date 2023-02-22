const fish = {
    name: 'Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '0123456789',
    price: 4000
}
// const phone = fish.phone;
// console.log(phone);

const {phone} = fish;
// console.log(phone);

const numbers5 = [10,20];
const [first, another] = numbers5;
console.log(first,another);

function getNames(){
    return ['Alim','Halim'];
}
const [a,b] = getNames();
console.log(a,b);
