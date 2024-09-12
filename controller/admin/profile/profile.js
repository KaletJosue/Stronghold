import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, where, getDoc, query, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyChywa2n_aLvEAVnL0eELGtK4NlJc3yOr8",
  authDomain: "strongholdcol.firebaseapp.com",
  projectId: "strongholdcol",
  storageBucket: "strongholdcol.appspot.com",
  messagingSenderId: "974686217896",
  appId: "1:974686217896:web:d6f39aea56f7719bc6c49d",
  measurementId: "G-ZTJHMT75VJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();

onAuthStateChanged(auth, (user) => {
  if (user) {

    // Profile

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        var img = document.querySelector('.img__profile')
        var name = document.querySelector('.name')
        var email = document.querySelector('.email')
        var rol = document.querySelector('.rol')

        getDocs(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))
        .then ((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().URL == "") {
              img.src = "/assets/profile_vacio.png"
            } else {
              img.src = doc.data().URL
            }

            var cadena = doc.data().Nombre
            var palabras = cadena.split(" ")

            var dosPrimerasPalabras = palabras.slice(0, 2).join(' ')

            name.textContent = dosPrimerasPalabras
            email.textContent = doc.data().Correo
            rol.textContent = doc.data().Rol
          })
        })

      } else {
        const tryAgain = document.getElementById('okBtn')
        const modal = document.querySelector('.modal')

        const main = document.querySelector('.main')

        main.style.display = "none"

        modal.classList.add('active')
        tryAgain.addEventListener('click', () => {
          location.href = "/views/login/login.html"
        })
      }
    });

    // Dark Mode
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        const body = document.body

        getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
          then((querySnapshot) => {
            querySnapshot.forEach((doc2) => {
              getDoc(doc(db, "Users", user.uid, "Private_Data", doc2.data().DarkMode)).
                then(() => {
                  if (doc2.data().DarkMode == "desactive") {
                    body.classList.remove('dark-mode')
                  }
                  else if (doc2.data().DarkMode == "active") {
                    body.classList.add('dark-mode')
                  }
                  else {
                    body.classList.add('dark-mode')
                  }
                })
            })
          })

      } else {
        const tryAgain = document.getElementById('okBtn')
        const modal = document.querySelector('.modal')

        const main = document.querySelector('.main')

        main.style.display = "none"

        modal.classList.add('active')
        tryAgain.addEventListener('click', () => {
          location.href = "/views/login/login.html"
        })
      }
    });

  } else {
    const tryAgain = document.getElementById('okBtn')
    const modal = document.querySelector('.modal')

    const main = document.querySelector('.main')

    main.style.display = "none"

    modal.classList.add('active')
    tryAgain.addEventListener('click', () => {
      location.href = "/views/login/login.html"
    })
  }
});
