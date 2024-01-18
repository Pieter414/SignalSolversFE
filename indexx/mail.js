var firebaseConfig = {
    apiKey: "AIzaSyAWs8m3QTDPlwfqqn0Ocsdt2w5PxP7BSKc",
    authDomain: "signal-4a9bb.firebaseapp.com",
    databaseURL: "https://signal-4a9bb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "signal-4a9bb",
    storageBucket: "signal-4a9bb.appspot.com",
    messagingSenderId: "397049383952",
    appId: "1:397049383952:web:13cf0fd8be9438c8ab4e95",
    measurementId: "G-LPNKC62RY2"
  };

firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signup(){
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithUsernameAndPassword(email.value , username.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In")
  }