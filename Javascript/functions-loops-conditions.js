
// Functions are small blocks of code meant to perform a particulat task
// function to add two numbers
function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

// function initialilasition
//var sum = addTwoNumbers(23, 5)
//console.log(sum)

function multiply(numberOne, numberTwo){
    return numberOne *  numberTwo;
}

//for, foreach, for-in , while
// executing code n- times from start point
// for(let i = 1; i < 13; i++){
//     var multiple = multiply(i, 5);
//     console.log(multiple)
// }
//while

// let j = 1; // initialize the start position
// while(j < 21){ // delare the break condition
//     var sum = addTwoNumbers(j, 10); // excute within the loop
//     console.log(sum);
//     j++;  // we increment the while loop
// }

//Conditions
//if switch
// function greet(time){
//     if (time < 25) {
//         if(time < 12){
//             console.log("good morning")
//         }
//         else if(time < 18){
//             console.log("good afternoon")
//         }
//         else{
//             console.log("good evening")
//         }
//     }
//     else{
//         console.log("Invalid time")
//     }
    
// }
function greet_switch(time){
   
    switch(true){
        case time < 12: console.log("good morning");
        break;
        case time < 18 && time > 12:  console.log("good afternoon");
        break;
        default:console.log("good evening");
        break;
    }
}

greet_switch(20)