function submit(){
username=document.getElementById("hi").value;
localStorage.setItem("username",username);
window.location="index1.html";
}