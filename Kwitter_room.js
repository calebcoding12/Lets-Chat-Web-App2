const firebaseConfig = {
    apiKey: "AIzaSyCPU9ufm5Qgl3RFll57USlFlnR22jMipeQ",
    authDomain: "lets-chat-web-app-f2ad1.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f2ad1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f2ad1",
    storageBucket: "lets-chat-web-app-f2ad1.appspot.com",
    messagingSenderId: "698602588009",
    appId: "1:698602588009:web:ebd5793f7c0681a81a1ff8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
