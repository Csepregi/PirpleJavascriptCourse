
const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 15 == 0){
            console.log("FizzBuzz " + i);
        }
        else if (i % 5 == 0){
            console.log("Buzz " + i);
        }
        else if (i % 3 == 3){
            console.log("Fizz " + i);
        }
    }
}

//fizzBuzz();

const isPrime = (num) => {

        for(let i = 2; i < num; i++){
            if(i%2 === 0){
                console.log("not Prime " +  i);
            }
            console.log("prime " + i)    
        } 
               
    }



isPrime(30);



  