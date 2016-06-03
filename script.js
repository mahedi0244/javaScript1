document.getElementById("myh1").onclick = function(){   
	document.getElementById("myh1").innerHTML = "This is the updated header" 
};

document.getElementById("myp").onclick = function(){   
	alert(document.getElementById("myp").innerHTML)
};

function validate(){
      
     var usr = document.getElementById("username").value;
     if (usr == "12345")
     	alert("You are right");
     else
     	alert("You are not right");

 }