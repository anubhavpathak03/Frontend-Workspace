// console.log(a);  -> here 'a' is ((not defined)) in this file that's why it give not defined error


// hoisting ->  variable and functions are hoisted which means their declaration is moved on the top of the code
console.log(nums);  // -> ((undefined)) beacause of hoisting this thing show with only 'var' keyword 
var nums = 19;

//array
// push pop shift unshif splice
//   -> shift :  remove stating element
//   -> splice : helps to remove element from the array
let a = [20, 30, 40, 50];
a.shift()
console.log(a);

let b = [1,2,3,4,5,6,7,8,9,10];
b.splice(1, 4); // remove elements from (index 1) upto 4 no. of elements
console.log(b);


// objects
var obj1 = {} // empty objects 
console.log(obj1);

let obj2 = {
    name: "Anubhav Pathak",
    roll_no: 45,
    height: "5'2",
    weight: "~50kg",
    behaviour: function() {} 
}
console.log(obj2);
// obj2 -> name, roll_no, height, weight are properties, whereas behaviour is called method

if(-1) {
    console.log("Hola!!!");
}

// JS mein kuch bhi likho vo do prakar ki chize hoti hn truthy ya falsy
// falsy -> 0, null, NaN, undefined, false, document.all  

if(0)  // 0->is false value that's why if statemnt don't work
console.log("Mein chal raha hun");
else
console.log("Mein jayada aache se chal raha hun")


// loop 
/**
 * forEach loop -> sirf array pe chalta hai mtlab(always mtlab always) ye kabhi bhi direct array mein change nhi lata ye array ki temporary copy pe change karta hai jiski wajh se array humesha same rahta hai

 *forin -> object par loop ke liye hota hai forin loop
 
 *do-while -> normal hai jayada jarorat nhi hai iski 
 */

var arr = [1, 2, 3, 4, 5]
arr.forEach(function(val) { 
    // val yahan copy le ke aayega array se not actual value isliye orignal change nhi hota
    console.log(val * 0);
})

console.log(arr);



var obj3 = {
    name: "anubhav pathak",
    age: 21,
    city: "most polluted"
}

// for deleting 1 element from object 
delete obj3.city;

for(var key in obj3) {
    console.log(key, "->", obj3[key]);
}


// callback function 
// pheli baat tho ye ek asynchronous nature hai javascript ka 
// yesa function jo normal ke comparison mein kuch time le to execute
setTimeout(function () {
    console.log("mein ek function hun 2 second ke baad execute hua hun, mera alag hi jalwa hai")
}, 2000);



// first class function 
// mtlab function ko use karsakte as a value
function main(a) {
    a();
}
main(function(){console.log("I'm calling, I'm a first class function");})



//arr = [1, 2, 3, 4, 5] is not array it is object
// to check array is array or not 
// Array.isArray([]) -> true means array 
// Array.isArray({}) -> means object return false;


if(22 == "22") {
    console.log('checking value same or not. Not checking the type');
}

if(!(22 === "22")) {
    console.log(`here we check value as well as typeof both LHS->${typeof 22} & RHS-> ${typeof "22"}`);
}

console.log(/****************************************************************************** */)

let citiesPopulation = {
    "London" : 8900000,
    "NewYork" : 8400000, // this is object
    "Paris" : 2200000,
    "Berlin" : 3500000,
}
let cityNewPopulations = {};
console.log(Object.keys(citiesPopulation));
console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
    if(city === "Berlin") {
        break;
    }
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);