var greeks = ["men", "mortal", "socrates"];

var socrates = false;
var men = false;
var mortal = false;

for(var i = 0; i<= greeks.length; i++){
    if(greeks[i] === "socrates"){
        socrates = true;
        console.log("hello")
 }
 else if("men" === greeks[i]){
     men = true;
    console.log("ciao")
 }
 else if("mortal" === greeks[i]){
     mortal = true;
     console.log("bye");
 }
 else if(men && mortal && socrates){
     console.log("Greeks");
 }
}