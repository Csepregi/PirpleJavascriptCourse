
window.onload = () => {
    addClassAndId();
    whoWon();
    
}

const fields = document.getElementsByTagName('td');


const player = document.getElementById('playing');

const playingField = document.getElementById('playingField');
playingField.addEventListener("click", playing);


const addClassAndId = () => {
  for(let i = 0; i < fields.length; i++) {
    fields[i].setAttribute('class', 'field');
    fields[i].setAttribute('id', i);
  }
}


setTimeout(nowXorO, 500);

function nowXorO(){
  for(let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("click", function() {
     if(player.textContent === "x"){
      this.textContent = "x";
     } else {
      this.textContent = "o";
     }
    })
  }
}

 function playing (e) {
  const hasBeenClicked = playingField.contains(e.target);
  if(hasBeenClicked){
    if(player.textContent == "X"){
    player.textContent = "O";
    } else {
      player.textContent = "X";
    }
  }
}

function whoWon(){
  let numberX = 0;
  let numberY = 0;
  for(let i = 0; i < fields.length; i++) {
    //let idField = document.getElementById("i")
    fields[i].addEventListener("click", function(){
      if(this.textContent == 'x'){
        console.log("XXXXXXXXXXXXXXXXXx")
        numberX += 1;
      }
      else if(this.textContent == 'o'){
        numberY += 1;
      }

      console.log("X: " + numberX);
      console.log("Y: " + numberY);
     
  });
  

  }
}
