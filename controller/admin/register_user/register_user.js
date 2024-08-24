// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChywa2n_aLvEAVnL0eELGtK4NlJc3yOr8",
  authDomain: "strongholdcol.firebaseapp.com",
  projectId: "strongholdcol",
  storageBucket: "strongholdcol.appspot.com",
  messagingSenderId: "974686217896",
  appId: "1:974686217896:web:d6f39aea56f7719bc6c49d",
  measurementId: "G-ZTJHMT75VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

// selects

var optionMenu = document.querySelector(".select-menu")
var selectBtn = optionMenu.querySelector(".select-btn")
var options = optionMenu.querySelectorAll(".option")
var sBtn_text = optionMenu.querySelector(".sBtn-text")
var opt = optionMenu.querySelector('.options')

optionMenu.classList.add('active')

selectBtn.addEventListener('click', () => {
  optionMenu.classList.toggle('active')

  window.addEventListener('click', event => {
    if (event.target == opt) {
      optionMenu.classList.add('active')
    }
  })
})

options.forEach(option => {
  option.addEventListener('click', () => {
    var selectedOption = option.querySelector('.option-text').innerText
    sBtn_text.textContent = selectedOption

    optionMenu.classList.toggle('active')
  })
})
