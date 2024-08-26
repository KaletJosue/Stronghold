// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, where } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

    // Dark Mode

    const body = document.body

    getDocs(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid)).
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().DarkMode == "desactive") {
            body.classList.remove('dark-mode')
          }
          else if (doc.data().DarkMode == "active") {
            body.classList.add('dark-mode')
          }
          else {
            body.classList.add('dark-mode')
          }
        })
      })

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
        rol = selectedOption
      })
    })

    // eyes

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

    // Register

    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var contra = document.getElementById('contra')
    var confir_contra = document.getElementById('confir_contra')
    var rol = ""
    var btn_register = document.getElementById('register')

    const closeBtn2 = document.querySelector('.closeIcon2')
    const tryAgain2 = document.getElementById('okBtn2')
    const modal2 = document.querySelector('.modal2')
    const textModal2 = document.querySelector('.textModal2')

    const closeBtn3 = document.querySelector('.closeIcon3')
    const tryAgain3 = document.getElementById('okBtn3')
    const modal3 = document.querySelector('.modal3')
    const textModal3 = document.querySelector('.textModal3')

    btn_register.addEventListener('click', () => {
      if (name.value.length != 0) {
        if (email.value.length != 0) {
          if (contra.value.length != 0) {
            if (confir_contra.value.length != 0) {
              if (rol != "") {
                if (contra.value == confir_contra.value) {

                  onAuthStateChanged(auth, (user) => {
                    if (user) {
                      const uid = user.uid;

                      createUserWithEmailAndPassword(auth, email.value, contra.value)
                        .then((userCredential) => {
                          // Signed in
                          const user = userCredential.user;
                          sendEmailVerification(auth.currentUser).
                            then(() => {
                              addDoc(collection(db, "Users", user.uid, "Private_Data"), {
                                Correo: email.value,
                                Id: user.uid,
                                Nombre: name.value,
                                Rol: rol,
                                DarkMode: "",
                                URL: ""
                              })
                            })

                          // ...
                          textModal3.textContent = `El usuario (${name.value}) ya quedo registrado, ahora dile que revise su correo para poder ingresar a STRONGHOLD`
                          modal3.classList.add('active')
                          closeBtn3.addEventListener('click', () => {
                            modal3.classList.remove('active')
                          })
                          tryAgain3.addEventListener('click', () => {
                            window.close()
                          })
                          window.addEventListener('click', event => {
                            if (event.target == modal3) {
                              modal3.classList.remove('active')
                            }
                          })

                        })


                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;

                          textModal2.textContent = "Lo sentimos no se pudo agregar tu usuario"
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
                        });

                    } else {
                      const tryAgain = document.getElementById('okBtn')
                      const modal = document.querySelector('.modal')

                      const main = document.querySelector('.container')

                      main.style.display = "none"

                      modal.classList.add('active')
                      tryAgain.addEventListener('click', () => {
                        location.href = "/views/login/login.html"
                      })
                    }
                  });

                } else {
                  textModal2.textContent = "Las contraseñas no son iguales"
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
              } else {
                textModal2.textContent = "Debes colocar el rol de tu empleado"
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
            } else {
              textModal2.textContent = "Debes confirmar la contraseña de tu empleado"
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
          } else {
            textModal2.textContent = "Debes colocar la contraseña de tu empleado"
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
        } else {
          textModal2.textContent = "Debes colocar el correo de tu empleado"
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
      } else {
        textModal2.textContent = "Debes colocar el nombre de tu empleado"
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


  } else {
    const tryAgain = document.getElementById('okBtn')
    const modal = document.querySelector('.modal')

    const main = document.querySelector('.container')

    main.style.display = "none"

    modal.classList.add('active')
    tryAgain.addEventListener('click', () => {
      location.href = "/views/login/login.html"
    })
  }
});

