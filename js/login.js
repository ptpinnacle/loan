var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<5) 
{
    pass='ZbK0'+dd;
    user='ID-Kb0'+dd;
}

if(dd<10) 
{
    pass='ZcK0'+dd;
    user='ID-Kh0'+dd;
}  

if(dd>=10)
{
    pass='IRsP'+dd;
    user= 'ID-pTp'+dd;
}

if(dd>15)
{
    pass='IySP'+dd;
    user= 'ID-ZfU'+dd;
}

if(dd>20)
{
    pass='wVmP'+dd;
    user= 'ID-pJg'+dd;
}

if(mm<10) 
{
    mm='0'+mm;
} 
psw = pass+yyyy+'A'+mm;
console.log(psw);
usr = user+mm;
console.log(usr);

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin" || username == usr && password == psw){
alert ("Login successfully");
window.location = "token=XudMa9j9kkL31o80oPx32Nm54.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}