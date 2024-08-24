// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, updatePassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

const modal5 = document.querySelector('.modal5')

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
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

  const modalBtn4 = document.getElementById('login')
  const closeBtn4 = document.querySelector('.closeIcon4')
  const tryAgain4 = document.getElementById('okBtn4')
  const modal4 = document.querySelector('.modal4')

    const user = auth.currentUser;

    var con
    con=document.getElementById('contra').value

    var con__contra
    con__contra=document.getElementById('con__contra').value


    if((con.length!=0) && (con__contra.length!=0)){
        if(con === con__contra){
            updatePassword(user, con).then(() => {
                // Update successful.
                modal4.classList.add('active')
                closeBtn4.addEventListener('click', () => {
                  modal4.classList.remove('active')
                })
                tryAgain4.addEventListener('click', () => {
                  location.href = "/Views/inside/index.html"
                })
                window.addEventListener('click', event => {
                  if(event.target == modal4){
                    modal4.classList.remove('active')
                  }
                })
                })


              
              .catch((error) => {
                // An error ocurred
                // ...
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
              });
            }
        else{
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
        }
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
  
    const modalBtn4 = document.getElementById('login')
    const closeBtn4 = document.querySelector('.closeIcon4')
    const tryAgain4 = document.getElementById('okBtn4')
    const modal4 = document.querySelector('.modal4')
  
      const user = auth.currentUser;
  
      var con
      con=document.getElementById('contra').value
  
      var con__contra
      con__contra=document.getElementById('con__contra').value
  
  
      if((con.length!=0) && (con__contra.length!=0)){
          if(con === con__contra){
              updatePassword(user, con).then(() => {
                  // Update successful.
                  modal4.classList.add('active')
                  closeBtn4.addEventListener('click', () => {
                    modal4.classList.remove('active')
                  })
                  tryAgain4.addEventListener('click', () => {
                    location.href = "/Views/inside/index.html"
                  })
                  window.addEventListener('click', event => {
                    if(event.target == modal4){
                      modal4.classList.remove('active')
                    }
                  })
                  })
  
  
                
                .catch((error) => {
                  // An error ocurred
                  // ...
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
                });
              }
          else{
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
          }
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
