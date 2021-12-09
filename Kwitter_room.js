const firebaseConfig = {
    apiKey: "AIzaSyCCpegH-ip6jI_0EaQYHMnOJmgoxT8w6Qo",
    authDomain: "kwitter-project-1d7a2.firebaseapp.com",
    databaseURL: "https://kwitter-project-1d7a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1d7a2",
    storageBucket: "kwitter-project-1d7a2.appspot.com",
    messagingSenderId: "264802004583",
    appId: "1:264802004583:web:26f27452285cc998c4aec2",
    measurementId: "G-JQ2ZVEVGX0"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names );
row = "<div class = 'room_name()' id = "+Room_names+" onclick = 'redirectToRoomname(this,id)' >#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
   });});}
getData();

function addRoomname() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "Adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
}

function redirectToRoomname(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_room.html";
}


