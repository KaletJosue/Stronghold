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
  apiKey: "AIzaSyC-IRi9zarpBp-mH0royd10OyJqrp3NP6M",
  authDomain: "stronghold-72de7.firebaseapp.com",
  projectId: "stronghold-72de7",
  storageBucket: "stronghold-72de7.appspot.com",
  messagingSenderId: "516790054055",
  appId: "1:516790054055:web:48001db4715f91c3e5bf82",
  measurementId: "G-2C096S75GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

login.addEventListener('click',(e)=>{

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

  
    var correo
    correo=document.getElementById('email').value


    var con
    con=document.getElementById('contra').value

    if((correo.length!=0)  && (con.length!=0)){
      signInWithEmailAndPassword(auth, correo, con)
      .then((userCredential) => {
        // Signed in
      const user = userCredential.user;
        // ...
        if(getAuth().currentUser.emailVerified){
          if(correo.length!=0 && con.length!=0){

            getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
            then((querySnapshot)=>{
              querySnapshot.forEach((doc2)=>{
                getDoc(doc(db, "Users", user.uid, "Private_Data", doc2.id)).
                then((docSnap)=>{
                  if(docSnap.exists()){
                    var rol = docSnap.data().Rol
                  }
                  if(rol == "Administrador"){
                    location.href = "/Stronghold/Views/inside/index.html"
                  }
                  if(rol == "Gerente" || rol == "Secretario"){
                    location.href = "/Stronghold/Views/inside_user/index.html"
                  }
                })
              })
            })

          }
         
      } 
  
      else{
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
        if(event.target == modal){
          modal.classList.remove('active')
        }
      })

  });
}

else{
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
}

   

    


})

window.addEventListener("keydown", (e)=>{
  if(e.keyCode === 13){
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

  
    var correo
    correo=document.getElementById('email').value


    var con
    con=document.getElementById('contra').value

    if((correo.length!=0)  && (con.length!=0)){
      signInWithEmailAndPassword(auth, correo, con)
      .then((userCredential) => {
        // Signed in
      const user = userCredential.user;
        // ...
        if(getAuth().currentUser.emailVerified){
          if(correo.length!=0 && con.length!=0){

            getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
            then((querySnapshot)=>{
              querySnapshot.forEach((doc2)=>{
                getDoc(doc(db, "Users", user.uid, "Private_Data", doc2.id)).
                then((docSnap)=>{
                  if(docSnap.exists()){
                    var rol = docSnap.data().Rol
                  }
                  if(rol == "Administrador"){
                    location.href = "/Stronghold/Views/inside/index.html"
                  }
                  if(rol == "Gerente" || rol == "Secretario"){
                    location.href = "/Stronghold/Views/inside_user/index.html"
                  }
                })
              })
            })

          }
         
      } 
  
      else{
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
        if(event.target == modal){
          modal.classList.remove('active')
        }
      })

  });
}

else{
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
}
  }
})