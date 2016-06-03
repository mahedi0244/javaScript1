document.getElementById("myh1").onclick = function(){   
	document.getElementById("myh1").innerHTML = "This is the updated header" 
};

document.getElementById("myp").onclick = function(){   
	alert(document.getElementById("myp").innerHTML)
};

function validate(){
      
     var usr = document.getElementById("username").value;
     var matches = usr.match(/\d+/g);
	
	if (usr == "12345")
     	alert("You are right");
	
	else if (matches != null) {
    	alert(" Username has atleast one number");
	}
     
     else
     	alert("You are not right");

 }