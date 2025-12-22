/* fn_mission05.js


*/
//함수 정의

//함수 호출


function printStarLine(num) {
    let str='';
    for(let i=0; i<num; i++) {
     str += '*';
    }
    console.log(str);
 }

 printStarLine(5);
//*****

printStarLine(3);
//***


console.log('-----square')

function printStarSquare (num) {
    for(let i=0; i<num; i++) {
        printStarLine (num);
    }
 }

printStarSquare(5);
//*****
//*****
//*****
//*****
//*****

printStarSquare(3);
//***
//***
//***

console.log('----triangle');
function printStarTriangle(num) {
    for(let i=1; i<=num; i++) {
        printStarLine(i);
    }
}

printStarTriangle(3);
//*
//**
//***

printStarTriangle(5); 
//*
//**
//***
//****
//*****
     
