class validate{
    static validateform(){
        let x=document.forms["myform"]["name"].value;
        if(x==""){
            alert("name must be filled out");
            return false;
        }
        let y=document.forms["myform"]["address"].value;
        if(y==""){
            alert("address must be filled out");
            return false;
        }
        let z=document.forms["myform"]["email"].value;
        if(z==""){
            alert("email must be filled out");
            return false;
        }
        let a=document.forms["myform"]["dob"].value;
        if(a==""){
            alert("dob must be filled out");
            return false;
        }  
        let b=document.forms["myform"]["mobno"].value;
        if(b=="")
        {
            alert("mobileno must be filled out");
            return false;
        }
        let d=document.forms["myform"]["password"].value;
        if(d==""){
            alert("password must be filled out");
            return false;
        }  
        let re=document.forms["myform"]["repassword"].value;
        if(re==""){
            alert("Re-type password must be filled out");
            return false;
        }  
    }
    
}