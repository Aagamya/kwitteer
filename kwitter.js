const firebaseConfig = {
    apiKey: "AIzaSyA4cF9Gxm0lUKiAebAafOQ_YUsWQfgVzQE",
  authDomain: "kwitter-de4a0.firebaseapp.com",
  databaseURL: "https://kwitter-de4a0-default-rtdb.firebaseio.com",
  projectId: "kwitter-de4a0",
  storageBucket: "kwitter-de4a0.appspot.com",
  messagingSenderId: "1054057128026",
  appId: "1:1054057128026:web:8b6e4658651bf153413863"
};
firebase.initializeApp(firebaseConfig)

function addUser(){
 user_name=document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
    purpose:"adding user name"
});
 localStorage.setItem("user_name",user_name);
 window.location="kwitter_room.html";
}