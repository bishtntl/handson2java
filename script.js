
// Q1>>>>>>>>>>>>>>>>>>>>>>
function abc(){
    console.log("hello")
}
abc();

// Q2>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function create (a,b){
   console.log(a+b)
}
create(4,3)

// Q3>>>>>>>>>>>>>>>>>>>>>
let arrow = ()=>{
    console.log("hello i am arrow function")

}
arrow();

// Q4>>>>>>>>>>>>>>>>
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


// Q5>>>>>>>>>>>>>>>>>>>>


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Q6>>>>>>>>>>>>>>>>>>>>>>>>>>.

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

// Q8>>.......................

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }



// Q9>>>>>>>>>>>>>>>>>>>>>>>>
var a = 10;

   (function (){
console.log(a); 
var a = 20;
 })();

//  Q10>>>>>>>>>>>>>>>>>>>>>>>>>

const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")

