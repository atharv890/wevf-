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
  username=localStorage.getItem("hi");
  room_name=localStorage.getItem("username");
  function submit(){
    msg=document.getElementById("chat").value;
    firebase.database().ref(room_name).push({name:username,message:msg,like:0});
    document.getElementById("hi").innerHTML="";
  }

  