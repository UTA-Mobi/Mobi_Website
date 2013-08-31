
function sendEmail() {
    
    var messagevalidate = document.getElementById("message").value;
    
    if (messagevalidate == null || messagevalidate == "") {
        
        alert("no message? C'mon homie!");
        return;
    }
    

    
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
        
    var url = "http://omega.uta.edu/~tim1784/email.php?subject=" + subject +"&message="+message;
    var url2 = "http://omega.uta.edu/~tim1784/email.php?subject=sfsdfsdf&message=vvvvvv";
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            xmlDoc =xmlhttp.responseXML;
            
            //document.getElementById("myDiv").innerHTML = "lkj";
        }
    }
    //document.getElementById("pract").innerHTML = url;
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    
    alert("Off It goes... \n To Infinity and Beyond!");
    

    
    
}