import firebase from 'firebase'

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyC6QlyQRTvrrTIPl6Q0xNyP7agRYC7ZkVI",
        authDomain: "fir-18d79.firebaseapp.com",
        databaseURL: "https://fir-18d79.firebaseio.com",
        projectId: "fir-18d79",
        storageBucket: "fir-18d79.appspot.com",
        messagingSenderId: "493870970",
        appId: "1:493870970:web:00a04befb9b04b7f1080c3",
        measurementId: "G-085N41BBGD"
      });
    }
  }

  get user() {
    return firebase.auth().currentUser.uid;
  }

  get useremail() {
    return firebase.auth().currentUser.email;
  }

  logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => console.log("Bye! Signing Off"));
  };
}

const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;