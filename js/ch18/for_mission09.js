/* for_mission09.js */
const star = parseInt(Math.random() * 5.0) + 3; //3~7 사이 랜덤값
console.log('star:', star);

for(let i=0; i<star; i++) {
    let str = ''; 
    for(let k=0; k<star-i; k++) {
     str += '*'
    }
    console.log(str);
}

//예)5
//*
//**
//***
//****
//*****

//예)3
//*
//**
//***