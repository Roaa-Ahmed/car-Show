'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

/*login and register*/
document.querySelector('#login-btn').onclick=()=>{
    document.querySelector('.login-form-container').classList.add('active');
}
document.querySelector('#close-login-form').onclick=()=>{
    document.querySelector('.login-form-container').classList.remove('active');
}
//login click function

function login()
{
  const form=document.getElementById('contact-form');
  
  const email=document.getElementById('email');
  const password=document.getElementById('password');
  const error1=document.getElementById('error1');
  const error2=document.getElementById('error2');
  form.addEventListener('submit',e=>{
    
      e.preventDefault();
      validateInputs();
  });

  const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
  const validateInputs =()=>{
    
    var x=false;
      
      const eml=email.value.trim();
      const pass=password.value.trim();
    
      if(eml===''){
          error1.innerText='email is required';
          error1.style.color='red';
          x=false;
      }else if(!isValidEmail(eml)){
        error1.innerText='email is not valid';
        error1.style.color='red';
          x=false;
      }else{
        
          x=true;
      }
      if(pass==='')
      {
        error2.innerText='password is required';
        error2.style.color='red';
          x=false;
      }else if(pass.length<8){
        error2.innerText='Password must be at least 8 character';
        error2.style.color='red';
          x=false;
      }else{
         
          x=true;
      }
      
      if(x===true)
      {
        window.location.href="index.html";
      }
      
    }
}

//signup click function
function signup(){
  const form=document.getElementById('signup-form');
  const username=document.getElementById('username');
  const email=document.getElementById('email1');
  const password=document.getElementById('password1');
  const password2=document.getElementById('password2');
  form.addEventListener('submit',e=>{
    
      e.preventDefault();
      validateInputs();
  });
  const setError=(element,message)=>{
      const inputControl=element.parentElement;
      const errorDisplay=inputControl.querySelector('.error');
      errorDisplay.innerText=message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
  }
  const setSuccess=element=>{
      const inputControl=element.parentElement;
      const errorDisplay=inputControl.querySelector('.error');
      errorDisplay.innerText='';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
  }
  const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
  const validateInputs =()=>{
    var x=false;
      const user=username.value.trim();
      const eml=email.value.trim();
      const pass=password.value.trim();
      const pass2=password2.value.trim();
      
      if(user==='')
      {
          setError(username,'Username is required');
          x=false;
      }else{
          setSuccess(username);
          x=true;
      }
      if(eml===''){
          setError(email,'Email is required')
          x=false;
      }else if(!isValidEmail(eml)){
          setError(email,'not valid email');
          x=false;
      }else{
          setSuccess(email);
          x=true;
      }
      if(pass==='')
      {
          setError(password,'Password is reqiured');
          x=false;
      }else if(pass.length<8){
          setError(password,'Password must be at least 8 character');
          x=false;
      }else{
          setSuccess(password);
          x=true;
      }
      if(pass2===''){
          
          setError(password2,'password again is required');
          x=false;
      }else if(pass2!==pass)
      {
          setError(password2,'password doesnot match');
          x=false;
      }else{
          setSuccess(password2);
          x=true;
      }
      debugger;
      if(x===true)
      {
        window.location.href="index.html";
      }
      
    }
     
    
  }



 