import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAe4dYdLvRF-5Fdf4S4C2FSKFp-dzJiGhc",
  authDomain: "lakesecretsanta.firebaseapp.com",
  projectId: "lakesecretsanta",
  storageBucket: "lakesecretsanta.appspot.com",
  messagingSenderId: "638034387433",
  appId: "1:638034387433:web:13142efe011a67b6f1eb78",
  measurementId: "G-ER3WT9VGWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function register(email: string, password: string) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Successfully registered! Please login.');
  })
  .catch((error) => {
    console.log(error.message);
  });
}

function login(email: string, password: string) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Successfully logged in!');
  })
  .catch((error) => {
    console.log(error.message);
  });
}

function getCurrentUser() {
  const auth = getAuth();
  if (auth.currentUser !== null){
    return auth.currentUser.email;
  } else {
    return null;
  }
}

function logout() {

}

export { register , login, getCurrentUser};