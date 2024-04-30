const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click' , ()=> {
  container.classList.add("active");
});

loginBtn.addEventListener('click', ()=> {
  container.classList.remove("active");
})



//--------------------------- register-form ---------------------------------------
// let register_name,register_email,register_pass;
//     register_name =  document.querySelector('.register-name');
//     register_email = document.querySelector('.register-email');
//     register_pass = document.querySelector('.register-pass');



// register_name.addEventListener('input' , ()=>{
//   if(register_name.value.length < 5 ){
//     register_name.setCustomValidity("Enter at least 5 characters !");
//   }
//   else {
//     register_name.setCustomValidity("");
//   }
// });
// register_email.addEventListener('input' , ()=>{
//   if(register_email.value.includes('@')  && register_email.value.slice(sign_email.value.indexOf('@')+1) == ""){
//     register_email.setCustomValidity("ENTER A VALID EMAIL !");
//   }
//   else {
//     register_email.setCustomValidity("");
//   }
// });
// register_pass.addEventListener('input' , ()=>{
//   if(register_pass.value.length < 8){
//     register_pass.setCustomValidity("Enter at least 8 digits !");
    
//   }
//   else {
//     register_pass.setCustomValidity("");
//   }
// });







//---------------------------------------------------------------------------------------------

function saveData(){
  let name ,email , password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;



  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
  
  if(user_records.some((v)=>{
    return v.email==email;
  })){
    alert("This Email Adress Already Existing");
  }
  else {
      if(name !== "" && email !== "" && password !== ""){
        
        user_records.push({
          "name" : name,
          "email" : email,
          "password" : password
        })
        localStorage.setItem("users",JSON.stringify(user_records));
        window.location.href="index.html";
      }
    }
}



function checkData(){


  let email , password;
  email = document.getElementById("log-email").value;
  password = document.getElementById("log-password").value;


  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_record.some((v)=>{
    return v.email == email && v.password== password
  })){
    alert("Login Successfull");


    let current_user = user_record.filter((v) =>{
      return v.email==email && v.password == password
    })[0]

    window.location.href="index.html";
  }

  else {
    alert("Wrong Email Or Password !");
  }
}

