


window.onload = function (){
    
    

    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('SignUpForm');

    const signupButton = document.getElementById('signUpButton');
    signupButton.addEventListener("click", signup);

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener("click", login);

    const signUpSubmit = document.getElementById('signUpSubmit');
    signUpSubmit.addEventListener("click", signUpToLists);

    const loginSubmit = document.getElementById('loginSubmit');
    loginSubmit.addEventListener("click", loginToLists);

    const toDoLists = document.getElementById('tdList');
    
    const list = document.querySelector('#list');
    const input = document.getElementById('item');
    const todoList = document.getElementById('todoList')

    let user = {currentUser:[]};

    function signup(e) {
        console.log('hello');
        loginForm.style.display = 'none';
        if (signUpForm.style.display == 'none'){
            signUpForm.style.display = 'block';   
    
        } else {
            signUpForm.style.display = 'none';
        }       
    };

    function login(e) {
    
    signUpForm.style.display = 'none';
    if (loginForm.style.display == 'none'){
        loginForm.style.display = 'block';   
    } else {
        loginForm.style.display = 'none';
   }
}

function signUpToLists(e){
    
    toDoLists.classList.add("show");
    toDoLists.style.display = 'block';
    signUpForm.style.display = 'none';
}

function loginToLists(e){
    toDoLists.style.display = 'block';
    loginForm.style.display = 'none';
}

function RegisterUser(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.list = [];
}



function GetUser(email, password){
    this.email = email;
    this.password = password
}


document.getElementById('SignUpForm').addEventListener('submit', function() {
    
    let signupUser = {user:[]};

    let firstName = document.getElementById('Registerfirstname').value;
    let lastName = document.getElementById('Registerlastname').value;
    let email = document.getElementById('Registeremail').value;
    let password = document.getElementById('Registerpassword').value;

    let registerUser = new RegisterUser(firstName, lastName, email, password);
    signupUser.user.push(registerUser);
    localStorage.setItem("registeruser", JSON.stringify(registerUser)); 
    const key = registerUser.email;
    console.log(key)
    let regUser = localStorage.getItem('registeruser')
    console.log(regUser); 
    toDoLists.style.display = 'block';
});



document.getElementById('loginForm').addEventListener('submit', function() {
    
        

        let email = document.getElementById('emailInput').value;
        let password = document.getElementById('passwordInput').value;

        let newUser = new GetUser(email, password);
        user.currentUser.push(newUser);
        localStorage.setItem("user", JSON.stringify(newUser)); 
        const key = newUser.email;
        console.log(key)
        let cUser = localStorage.getItem('user')
        console.log(cUser); 
        
  });


  todoList.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function getValues() {
    var storedValues = window.localStorage.myitems;
    // if(!storedValues) {
    //   list.innerHTML = '<li>Make a to do list</li>'
                      
    // }
   // else {
      list.innerHTML = storedValues;
    //}
  }
  getValues();
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  

}
