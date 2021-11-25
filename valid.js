class valid{
static validatelogin(){
        
    let ln=document.forms["inform"]["username"].value;
    if(ln==""){
        alert("username must be filled out");
        return false;
    }
    let ky=document.forms["inform"]["password"].value;
    if(ky==""){
        alert("password must be filled out");
        return false;
    }
}
}