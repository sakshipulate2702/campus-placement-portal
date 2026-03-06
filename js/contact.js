document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

let msg = document.getElementById("msg");

if(name=="" || email=="" || message=="")
{
alert("Please fill all fields");
}
else
{
msg.innerHTML="Message sent successfully!";
}

});