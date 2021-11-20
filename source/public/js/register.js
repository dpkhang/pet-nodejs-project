const cancel = document.getElementById('cancel');
const username = document.getElementsByName('username');
const password = document.getElementsByName('password');
const email = document.getElementsByName('email');
const re_password = document.getElementsByName('re-password');
const username_err = document.getElementsByClassName('register-box_element-error-username');
const password_err = document.getElementsByClassName('register-box_element-error-password');
const email_err = document.getElementsByClassName('register-box_element-error-email');
const re_password_err = document.getElementsByClassName('register-box_element-error-re_password');

cancel.addEventListener('click', () => location.href = "/");
let object_err = {
    content: 0,
}
function sendRequest(){ 
    let httpxml = new XMLHttpRequest();
    let object = {
        "username": username[0].value,
    }
    let json = JSON.stringify(object);

    httpxml.open('POST', '/register/check', true);
   // httpxml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //gui theo dang post
   // httpxml.send(`username=${username[0].value}`);
    httpxml.setRequestHeader("content-type", "application/json;charset=UTF-8"); //theo dang json
    httpxml.send(json);
    httpxml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            username_err[0].innerHTML = this.responseText;
            if(username_err[0].innerHTML != ""){
                object_err.content = 1;
            }else{
                object_err.content = 0;
            }
        }
    } 
}

function checkSubmit(){
    let reg_username = /^[A-Z][A-Za-z0-9]{7,15}$/;
    let reg_password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{8,15}$/;
    let reg_amail = /^([A-Za-z0-9]+)@([A-Za-z0-9]+)\.([A-Za-z0-9]{3,10})$/;
    let _istrue = 1;
    console.log(object_err.content);
    
    if(username[0].value == ""){
        username_err[0].innerHTML = "Username is not empty.";
        _istrue = 0;
    }else if(!reg_username.test(username[0].value)){
        username_err[0].innerHTML = "Username must have capital letter in the first character, lenght is 8 - 15.";
        _istrue = 0;
    }else if(object_err.content == 1){
        _istrue = 0;
        username_err[0].innerHTML = "Username is existed.";
    }else{
        username_err[0].innerHTML = "";
    }
    if (email[0].value == ""){
        email_err[0].innerHTML = "Email must not be empty.";
        _istrue = 0;
    }else if(!reg_amail.test(email[0].value)){
        email_err[0].innerHTML = "Email is not invalid.";
        _istrue = 0;
    }else {
        email_err[0].innerHTML = "";
    }
    if(password[0].value == ""){
        password_err[0].innerHTML = "Password must not be empty.";
        _istrue = 0;
    }else if(!reg_password.test(password[0].value)){
        password_err[0].innerHTML = "Password must have at least one alphanumeric character, lenght is 9 - 15.";
        _istrue = 0;
    }else {
        password_err[0].innerHTML = "";
    }
    if(re_password[0].value == ""){
        re_password_err[0].innerHTML = "Password must not be empty.";;
        _istrue = 0;
    }else if(re_password[0].value != password[0].value){
        re_password_err[0].innerHTML = "Password does not match.";
        _istrue = 0;
    }else {
        re_password_err[0].innerHTML = "";
    }
    if(_istrue == 0){
        return false;
    }else return true;
}
username[0].onkeyup = sendRequest;
