// const greekers = ["men","gabor" , "socrates"];
// greekers.forEach(function(greek){
//     return greek;
// }) 



// const socratesPhrase = (who, greeks) => {
    
//   let isMen = true;
//     greeks.forEach(function(greek){
//         if(typeof who != 'string'){
//             console.log("wrong"); 
//         }
//         else if(greeks.indexOf(who) > -1){
//             isMen = true; 
//         } else {
//             isMen = false;
//         }
        
       
         
// });
// console.log(isMen)
// return isMen;


// };

//socratesPhrase("men", greekers);

// const greekers = ["men","gabor" , "socrates"];
// function Greek(type,...items) {
//     items = greekers;  
//     return console.log(items.filter(item => typeof item === 'string'));  
//   }
//   Greek(greekers); 

// const socrates = (greeks) => {
//     const isMan = false;
//     greeks.forEach(element => {
//         if(element === "men" || element === "socrates"){
//             isMan = true;
//         }
//         isMan = false
//     });
//     return isMan;
        
// }

// socrates(Greek);

const greeks = {
    Socrates: "man",
    Ram: "god",
    Barun: "god",
    Gabor: "man",
    Hanuman: "god",
    Claudia: "man",
    Palinka: "dog", 
    Eat: 3
  };

  const getAllGreeks = (geek) => {

    //function getAllGreeks(geek){
    Object.keys(geek).forEach(function (item) {
         if (typeof geek[item] !== 'string'){
            console.log(item + " " + "please type a string");
        }
        
        else if(geek[item] === "man") { // value
            console.log(item + " " + "true"); // key
        }
        else if 
            (geek[item] !== "man"){
            console.log(item + " " + "false");
        }
        
    });
}

getAllGreeks(greeks);

