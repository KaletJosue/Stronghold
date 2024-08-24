// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, where, getDoc, query } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
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

// eye

var contrasena = document.getElementById('contra')

var container_eye = document.querySelector('.container_eye')
var line_eye = document.querySelector(".line_eye")

contrasena.type = 'password';

container_eye.addEventListener('click', () => {
  line_eye.classList.toggle('active')

  if (contrasena.type === 'password') {
    contrasena.type = 'text';
  } else {
    contrasena.type = 'password';
  }
})

login.addEventListener('click', (e) => {

  const closeBtn = document.querySelector('.closeIcon')
  const tryAgain = document.getElementById('okBtn')
  const modal = document.querySelector('.modal')

  const closeBtn2 = document.querySelector('.closeIcon2')
  const tryAgain2 = document.getElementById('okBtn2')
  const modal2 = document.querySelector('.modal2')

  const closeBtn3 = document.querySelector('.closeIcon3')
  const tryAgain3 = document.getElementById('okBtn3')
  const modal3 = document.querySelector('.modal3')


  var correo = document.getElementById('email').value
  var con = document.getElementById('contra').value

  if ((correo.length != 0) && (con.length != 0)) {
    signInWithEmailAndPassword(auth, correo, con)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (getAuth().currentUser.emailVerified) {
          if (correo.length != 0 && con.length != 0) {

            getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
              then((querySnapshot) => {
                querySnapshot.forEach((doc2) => {
                  getDoc(doc(db, "Users", user.uid, "Private_Data", doc2.id)).
                    then((docSnap) => {
                      if (docSnap.exists()) {
                        var rol = docSnap.data().Rol
                      }
                      if (rol == "Administrador") {
                        location.href = "/views/admin/inside/inside.html"
                      }
                      if (rol == "Gerente" || rol == "Secretario") {
                        location.href = "/views/user/inside_user/inside_user.html"
                      }
                    })
                })
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
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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

      });
  }

  else {
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
  }
})


// swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});
