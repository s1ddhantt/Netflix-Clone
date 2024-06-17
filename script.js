function validation()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value.trim() == "" || password.value.trim() == "")
    {
        alert("please enter a value");
        return false;
    }
    else if( username.value == "8120076348" && password.value == "rickey")
    {
        return true;
    }
    else{
        
        document.getElementById("label").style.visibility = "visible";
        return false;
    }
       
}


