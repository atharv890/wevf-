const firebaseConfig = {
  apiKey: "AIzaSyCFXnj-KRYHrXJ-41HOQOEG-gGijSmtHTU",
  authDomain: "kwitterh.firebaseapp.com",
  databaseURL: "https://kwitterh-default-rtdb.firebaseio.com",
  projectId: "kwitterh",
  storageBucket: "kwitterh.appspot.com",
  messagingSenderId: "60775983530",
  appId: "1:60775983530:web:1742051fa406f419fee3d3"
};

firebase.initializeApp(firebaseConfig);
function submit(){
username=document.getElementById("username").value;
console.log(username);
firebase.database().ref("/").child(username).update({key:"2",key2:"3"});
localStorage.setItem("username",username);
window.location="kwitter1.html";
}
function getData(){firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
username=childKey;
console.log(username);
hi="<div id='wow'onclick ='redirect(this.id)'>#"+username+"</div><hr>";
document.getElementById("output").innerHTML+=hi;
});});}
getData();

function redirect(ji){
console.log(ji);
localStorage.setItem("username", redirect);
window.location="kwitter1.html";
}
