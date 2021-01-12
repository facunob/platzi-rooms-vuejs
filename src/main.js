import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBF3tFb5Q5pXj8rpPDLaSoFFLWh79fcYxs",
  authDomain: "platzi-rooms-font.firebaseapp.com",
  databaseURL: "https://platzi-rooms-font-default-rtdb.firebaseio.com",
  projectId: "platzi-rooms-font",
  storageBucket: "platzi-rooms-font.appspot.com",
  messagingSenderId: "352846468923",
  appId: "1:352846468923:web:2ebd96f25cc3df7408891e",
  measurementId: "G-EKKJ1KDRMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch("FETCH_USER", { id: store.state.authId });
  }
}).$mount("#app");
