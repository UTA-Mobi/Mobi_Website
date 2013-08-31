function soap() {
    var xmlhttp;
    
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    // build SOAP request
    var sr =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soapenv:Envelope ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
    'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
    '<soapenv:Body>' +
    '<api:some_api_call soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
    '<username xsi:type="xsd:string">login_username</username>' +
    '<password xsi:type="xsd:string">password</password>' +
    '</api:some_api_call>' +
    '</soapenv:Body>' +
    '</soapenv:Envelope>';
    var songnameChecker=document.forms["requestSong"]["songname"].value;
    var emailChecker=document.forms["requestSong"]["email"].value;
    var atpos=emailChecker.indexOf("@");
    var dotpos=emailChecker.lastIndexOf(".");
    if (songnameChecker==null || songnameChecker=="")
    {
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailChecker.length)
        {
            /* document.getElementById("songWrong").innerHTML = "Dude! We need a song name.";
            document.getElementById("songWrong").style.color='#FF0000';
            document.getElementById("emailWrong").innerHTML = "Bro... invalid email.";
            document.getElementById("emailWrong").style.color='#FF0000';
            return false; */
            if(emailChecker==null || emailChecker=="")
            {
                alert("Broski! We need a song name.");
                return false;
            }
            else{
                alert("Dude! We need a song name and a valid email.");
                return false;
            }

            //document.location.reload(true);
            //document.forms["requestSong"]["songname"].setAttribute("placeholder", "need a song name");
            //showAlert();
        }
        else
        {
            alert("Broski! We need a song name.");
            return false;
        }
    }
    else if((atpos<1 || dotpos<atpos+2 || dotpos+2>=emailChecker.length)){
        if(emailChecker==null || emailChecker=="")
        {
            return false;
        }
        else{
            alert("Bro... invalid email...");
            return false;
        }
        //document.getElementById("emailWrong").value = "Bro... invalid email.";
        //document.getElementById("emailWrong").style.color='#FF0000';
    }
    else{/*
    xmlhttp.open('POST', 'https://somesoapurl.com/', true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                
                alert('done use firebug to see responce');
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
    // send request
    // ...
          
    }*/
    }
}