import firebase from 'firebase';

  
    //paste your SDK here
  const firebaseConfig = {
  apiKey: "AIzaSyCWi6ilMlFBtsORFDoRECSc2MYHDEHRc2c",
  authDomain: "classtest-77bcc.firebaseapp.com",
  databaseURL: "https://classtest-77bcc-default-rtdb.firebaseio.com",
  projectId: "classtest-77bcc",
  storageBucket: "classtest-77bcc.appspot.com",
  messagingSenderId: "626965137380",
  appId: "1:626965137380:web:d5170ff6bed2a974e629f1"
};


    
  

  // Initialize Firebase
 let app = firebase.initializeApp(firebaseConfig);
  export default firebase.database();