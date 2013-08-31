function loadXMLDoc()
{
    var xmlhttp;
    var xml;
    document.getElementById("thad").innerHTML = "yo yo";
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
            document.getElementById("artist").innerHTML = xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue; // - this one works
            document.getElementById("title").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        }
    }
    xmlhttp.open("GET","http://radio.uta.edu/mediaplayer/nowplaying.xml",true);
    xmlhttp.send();
    
    
}
