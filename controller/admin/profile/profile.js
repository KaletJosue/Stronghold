// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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
const user = auth.currentUser;

const modal5 = document.querySelector('.modal5')

const modalBtn6 = document.getElementById('login')
const closeBtn6 = document.querySelector('.closeIcon6')
const tryAgain6 = document.getElementById('okBtn6')
const modal6 = document.querySelector('.modal6')

const modalBtn3 = document.getElementById('login')
const closeBtn3 = document.querySelector('.closeIcon3')
const tryAgain3 = document.getElementById('okBtn3')
const modal3 = document.querySelector('.modal3')

onAuthStateChanged(auth, (user) => {
  if (user) {

    getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
      then(querySnapshot => {
        querySnapshot.forEach((doc) => {

          //doc.data() is never undefined for query doc snapshots

          var email = document.getElementById ("obt__email") 
          var phone = document.getElementById ("obt__phone")

          email.value = doc.data().Correo
          phone.value = doc.data().Rol

        })
      })

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...

    delete2.addEventListener('click', (e)=>{
      modal6.classList.add('active')
      closeBtn6.addEventListener('click', () => {
        modal6.classList.remove('active')
      })
      tryAgain6.addEventListener('click', () => {
        modal6.classList.remove('active')
      })
      window.addEventListener('click', event => {
        if(event.target == modal6){
          modal6.classList.remove('active')
        }
      }) 
    })



    okBtn7.addEventListener('click', (e)=>{
      deleteUser(user).then(() => {
        // User deleted.

        location.href = "/Views/login/index.html"

      }).catch((error) => {
        // An error ocurred

        modal3.classList.add('active')
        closeBtn3.addEventListener('click', () => {
          modal3.classList.remove('active')
        })
        tryAgain3.addEventListener('click', () => {
          modal3.classList.remove('active')
        })
        window.addEventListener('click', event => {
          if(event.target == modal3){
            modal3.classList.remove('active')
          }
        }) 

        // ...
      });
    })

  } 
  
  else {
    // User is signed out
    // ...
    modal5.classList.add('active')
  }
})

const modalBtn2 = document.getElementById('login')
const closeBtn2 = document.querySelector('.closeIcon2')
const tryAgain2 = document.getElementById('okBtn2')
const modal2 = document.querySelector('.modal2')


button__email.addEventListener('click', (e) =>{
  modal2.classList.add('active')
  closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('active')
  })
  tryAgain2.addEventListener('click', () => {
    modal2.classList.remove('active')
  })
  window.addEventListener('click', event => {
    if(event.target == modal2){
      modal2.classList.remove('active')
    }
  }) 

  Toastify({

    text: "Lo sentimos, tu correo no se popuede cambiar",
    
    duration: 3000
    
    }).showToast();
})


