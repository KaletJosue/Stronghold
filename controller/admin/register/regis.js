// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

const modal5 = document.querySelector('.modal5')


register.addEventListener('click', (e) => {
  var password
  password = document.getElementById('tel').value


  var email
  email = document.getElementById('ema').value

  var confir
  confir = document.getElementById('confir').value

  var phoneNumber
  phoneNumber = document.getElementById('phone').value

  var rol
  rol = document.getElementById('roll').value


  const modalBtn = document.getElementById('login')
  const closeBtn = document.querySelector('.closeIcon')
  const tryAgain = document.getElementById('okBtn')
  const modal = document.querySelector('.modal')

  const modalBtn2 = document.getElementById('login')
  const closeBtn2 = document.querySelector('.closeIcon2')
  const tryAgain2 = document.getElementById('okBtn2')
  const modal2 = document.querySelector('.modal2')

  const modalBtn3 = document.getElementById('login')
  const closeBtn3 = document.querySelector('.closeIcon3')
  const tryAgain3 = document.getElementById('okBtn3')
  const modal3 = document.querySelector('.modal3')

  const modalBtn6 = document.getElementById('login')
  const closeBtn6 = document.querySelector('.closeIcon6')
  const tryAgain6 = document.getElementById('okBtn6')
  const modal6 = document.querySelector('.modal6')


  if ((password.length != 0) && (email.length != 0) && (confir.length != 0) && (phoneNumber.length != 0)) {

    if (rol != 0) {
      if (password == confir) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            sendEmailVerification(auth.currentUser).
              then(() => {
                addDoc(collection(db, "Users", user.uid, "Private_Data"), {
                  Correo: email,
                  Id: user.uid,
                  Nombre: phoneNumber,
                  Rol: rol
                })
              })

            // ...
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

          })


          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      }

      else {
        modal.classList.add('active')
        closeBtn.addEventListener('click', () => {
          modal.classList.remove('active')
        })
        tryAgain.addEventListener('click', () => {
          modal.classList.remove('active')
        })
        window.addEventListener('click', event => {
          if (event.target == modal) {
            modal.classList.remove('active')
          }
        })
      }

    }

    else{
      modal6.classList.add('active')
      closeBtn6.addEventListener('click', () => {
        modal6.classList.remove('active')
      })
      tryAgain6.addEventListener('click', () => {
        modal6.classList.remove('active')
      })
      window.addEventListener('click', event => {
        if (event.target == modal6) {
          modal6.classList.remove('active')
        }
      })
    }

  }

  else {
    modal3.classList.add('active')
    closeBtn3.addEventListener('click', () => {
      modal3.classList.remove('active')
    })
    tryAgain3.addEventListener('click', () => {
      modal3.classList.remove('active')
    })
    window.addEventListener('click', event => {
      if (event.target == modal3) {
        modal3.classList.remove('active')
      }
    })
  }


})