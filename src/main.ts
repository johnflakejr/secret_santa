import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from './store'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

createApp(App).use(router).use(store).use(Quasar, quasarUserOptions).mount('#app')