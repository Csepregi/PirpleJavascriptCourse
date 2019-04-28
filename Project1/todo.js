const loginForm = document.getElementById('LogInForm');
const signUpForm = document.getElementById('SignUpForm');

const signupButton = document.getElementById('signUpButton');
signupButton.addEventListener("click", signup);

const loginButton = document.getElementById('loginButton');
//loginButton.addEventListener("click", login);

const loginSubmit = document.getElementById('loginButton');
//loginButton.addEventListener("click", login);

const signUpSubmit = document.getElementById('loginSubmit');
//loginButton.addEventListener("click", login);

const password = document.getElementById('password');
const email = document.querySelector('#email');




const todoList = document.getElementById('todoList')
const ul = document.querySelector('ul')
//const button = document.querySelector('button')
const input = document.getElementById('item');

LogInForm.addEventListener('submit', function(){
    // localStorage.setItem('item', JSON.stringify(email));
    // var saved = localStorage.getItem('item');
    // console.log(saved);
    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
    var storedValue = localStorage.getItem("email");
    console.log(storedValue);

});






// function LoginUser(password, email) {
//     this.password = password;
//     this.email = email;
// }

// const LoginUser = {
//     password: passwordValue,
//     email: emailValue
// }

const storage = window.localStorage;
let currentUser = {};

function User(fname, lname, email, password) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.lists = [];
}

const saveUser = (user) => {
    storage.setItem(user.email, JSON.stringify(user));
    console.log(storage);
};

const save = () => {
    const user = JSON.parse(storage.getItem(currentUser.email));
    storage.setItem(user.email, JSON.stringify(currentUser));
    console.log(user);
};


function signup(e) {
    loginForm.style.display = 'none';
    if (signUpForm.style.display == 'none'){
        signUpForm.style.display = 'block';   

    } else {
        signUpForm.style.display = 'none';
    }       
};

function LoginUser(password, email) {
    this.password = document.getElementById('password').value,
    this.email = document.getElementById('email').value
}

// let LoginUser = {
//     password : document.getElementById('password').value,
//     email : document.getElementById('email').value
// }

// var User = JSON.stringify(LoginUser);
// console.log(User);
// localStorage.setItem('user', LoginUser);
// //Users.push(User);
// console.log(localStorage);

// function login(e) {
//     //let Users = {"users": []} 
//     let Users = []
//     signUpForm.style.display = 'none';
//     if (loginForm.style.display == 'none'){
//         loginForm.style.display = 'block';   
        
//         var password = document.getElementById('password').value;
//         var email = document.getElementById('email').value;
//     // create new object using consturctor
//         var newUser = new LoginUser(password, email);
//         var User = JSON.stringify(newUser);
//         Users.push(User);
//         console.log(User);
//     // push new object into array
//         //Users.push(newUser);
//         //localStorage.setItem("LoginUsers", JSON.stringify(Users));
      
        
//     } else {
//         loginForm.style.display = 'none';
//     } 
     
// };
//let Users = {"us": []} 
//function login() {
    
    // var password = document.getElementById('password').value;
    // var email = document.getElementById('email').value;
    // var newUser = new LoginUser(password, email);

    // saveUser(email);
    // save();

    // var inputEmail= document.getElementById("email");
    // localStorage.setItem("email", inputEmail.value);

    // var storedValue = localStorage.getItem("email");
    // console.log(storedValue);
    // console.log(localStorage.email);



    // Users.us.push(newUser);
    // var User = JSON.stringify(LoginUser);
    // console.log(User);
    // localStorage.setItem('Users', JSON.stringify(Users));
    
    // console.log(Users);
    // return true
        
       // var password = document.getElementById('password').value;
        //var email = document.getElementById('email').value;
    // create new object using consturctor
        //var newUser = new LoginUser(password, email);
        // var User = JSON.stringify(LoginUser);
        // console.log(User);
        // localStorage.setItem('user', LoginUser);
        //Users.push(User);
        //console.log(localStorage);
    // push new object into array
        //Users.push(newUser);
        //localStorage.setItem("LoginUsers", JSON.stringify(Users));
      
    
     
//};


// const DoMaker = text => {
//     const li = document.createElement('li')
//     li.textContent = text
//     ul.appendChild(li)
//   }

//   todoList.addEventListener('submit', function(e) {
//     e.preventDefault()
//     itemsArray.push(input.value)
//     localStorage.setItem('items', JSON.stringify(itemsArray))
//     DoMaker(input.value)
//     input.value = ''
//   })

  
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))

// data.forEach(item => {
//     DoMaker(item)
//   })



