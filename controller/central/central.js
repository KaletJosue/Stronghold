// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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
const storage = getStorage();
const db = getFirestore(app);

const archivoInput = document.getElementById('up__ar');
const archivo = archivoInput.files[0];



onAuthStateChanged(auth, (user) => {


  const modal5 = document.querySelector('.modal5')

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    
    // ...
    getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if(doc.data().Direccion == "Archivo central"){
            var all = document.getElementById('all')
            var div = document.createElement('div')
            var img = document.createElement('img')
            var text = document.createElement('p')
  
            div.className = "box"
            text.textContent = doc.data().Nombre
            img.src = "/Assets/pdf.svg"
            img.className = "tam"
  
  
  
            img.addEventListener('click', (e) => {
              window.open(doc.data().URL, doc.data().Nombre)
            })
  
            text.addEventListener('click', (e) => {
              window.open(doc.data().URL, doc.data().Nombre)
            })
  
            all.appendChild(div)
            div.appendChild(img)
            div.appendChild(text)
          }


        })
      })
    
  } else {
    // User is signed out
    // ...
    modal5.classList.add('active')
    window.addEventListener("keydown", (e)=>{
      if(e.keyCode === 13){
        location.href = "/Views/login/index.html"
      }
    })
  }
})

const modalBtn2 = document.getElementById('login')
const closeBtn2 = document.querySelector('.closeIcon2')
const tryAgain2 = document.getElementById('okBtn2')
const modal2 = document.querySelector('.modal2')
const tryAgain3 = document.getElementById('okBtn3')

btn__out.addEventListener('click', (e) => {
  modal2.classList.add('active')
  closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('active')
  })
  tryAgain2.addEventListener('click', () => {
    modal2.classList.remove('active')
  })
  window.addEventListener('click', event => {
    if (event.target == modal2) {
      modal2.classList.remove('active')
    }
  })
  tryAgain3.addEventListener('click', (e) => {
    signOut(auth).then(() => {
      // Sign-out successful.
      location.href = "/index.html"

    }).catch((error) => {
      // An error happened.
    });
  })

  window.addEventListener("keydown", (e)=>{
    if(e.keyCode === 13){
      signOut(auth).then(() => {
        // Sign-out successful.
        location.href = "/Views/login/index.html"
  
      }).catch((error) => {
        // An error happened.
      });
    }
  })


})

const modalBtn6 = document.getElementById('login')
const closeBtn6 = document.querySelector('.closeIcon6')
const tryAgain6 = document.getElementById('okBtn6')
const modal6 = document.querySelector('.modal6')

const modalBtn7 = document.getElementById('login')
const closeBtn7 = document.querySelector('.closeIcon7')
const tryAgain7 = document.getElementById('okBtn8')
const modal7 = document.querySelector('.modal7')

const modalBtn10 = document.getElementById('login')
const closeBtn10 = document.querySelector('.closeIcon10')
const tryAgain10 = document.getElementById('okBtn10')
const modal10 = document.querySelector('.modal10')

const modalBtn11 = document.getElementById('login')
const closeBtn11 = document.querySelector('.closeIcon11')
const tryAgain11 = document.getElementById('okBtn11')
const modal11 = document.querySelector('.modal11')

const modalBtn12 = document.getElementById('login')
const closeBtn12 = document.querySelector('.closeIcon12')
const tryAgain12 = document.getElementById('okBtn12')
const modal12 = document.querySelector('.modal12')

const modalBtn15 = document.getElementById('login')
const closeBtn15 = document.querySelector('.closeIcon15')
const tryAgain15 = document.getElementById('okBtn15')
const modal15 = document.querySelector('.modal15')

const loading = document.querySelector('.loading')

const close = document.querySelector('.btn__close')





