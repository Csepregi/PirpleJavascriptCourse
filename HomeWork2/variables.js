/**
 * var variables can be reached out of the scope
 * 
 */

function helloLadyVar(){
    if(true){
        var myLadyName = "Claudia";
    }
    console.log("My Lady Name: " + myLadyName);
}

/**
 * const variables can't be reached out of the scope
 * 
 */


function helloLadyConst(){
    if(true){
    const myLadyName = "Claudia";
    
    }
    console.log("My Lady Name: " + myLadyName);
}


/**
 * let variables can be canged
 * 
 */
function helloDogLet(){
    let isThereDog  = true;
    let dogName;
    if(isThereDog === true){
    dogName = "Pálesz";
    }
    else{
        dogName = "Pálinka"
    }
    console.log(dogName);
}



helloLadyVar();
//helloLadyConst();
helloDogLet();

/**
 * hoisting:
 *  => declarations are processed first before the code itself is executed. 
 */