// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
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

const modalBtn2 = document.getElementById('login')
const closeBtn2 = document.querySelector('.closeIcon2')
const tryAgain2 = document.getElementById('okBtn2')
const modal2 = document.querySelector('.modal2')
const tryAgain3 = document.getElementById('okBtn3')

const modalBtn6 = document.getElementById('login')
const closeBtn6 = document.querySelector('.closeIcon6')
const tryAgain6 = document.getElementById('okBtn6')
const modal6 = document.querySelector('.modal6')

const modalBtn20 = document.getElementById('login')
const closeBtn20 = document.querySelector('.closeIcon20')
const tryAgain20 = document.getElementById('okBtn20')
const modal20 = document.querySelector('.modal20')

const modal5 = document.querySelector('.modal5')

const loading = document.querySelector('.loading')

const modalBtn14 = document.getElementById('login')
const closeBtn14 = document.querySelector('.closeIcon14')
const tryAgain14 = document.getElementById('okBtn14')
const modal14 = document.querySelector('.modal14')

const modalBtn30 = document.getElementById('login')
const closeBtn130 = document.querySelector('.closeIcon30')
const tryAgain30 = document.getElementById('okBtn30')
const modal30 = document.querySelector('.modal30')

const modalBtn31 = document.getElementById('login')
const closeBtn131 = document.querySelector('.closeIcon31')
const tryAgain31 = document.getElementById('okBtn31')
const modal31 = document.querySelector('.modal31')

const modalBtn32 = document.getElementById('login')
const closeBtn132 = document.querySelector('.closeIcon32')
const tryAgain32 = document.getElementById('okBtn32')
const modal32 = document.querySelector('.modal32')

const modalBtn33 = document.getElementById('login')
const closeBtn133 = document.querySelector('.closeIcon33')
const tryAgain33 = document.getElementById('okBtn33')
const modal33 = document.querySelector('.modal33')

const modalBtn34 = document.getElementById('login')
const closeBtn134 = document.querySelector('.closeIcon34')
const tryAgain34 = document.getElementById('okBtn34')
const modal34 = document.querySelector('.modal34')

const modalBtn35 = document.getElementById('login')
const closeBtn135 = document.querySelector('.closeIcon35')
const tryAgain35 = document.getElementById('okBtn35')
const modal35 = document.querySelector('.modal35')

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

    var rete
    rete = document.getElementById("rete")

    getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var tr = document.createElement('tr')
          var td1 = document.createElement('td')
          var td2 = document.createElement('td')
          var td3 = document.createElement('td')
          var td4 = document.createElement('td')
          var td5 = document.createElement('td')
          var td6 = document.createElement('td')
          var td7 = document.createElement('td')
          var td8 = document.createElement('td')
          var td9 = document.createElement('td')
          var td10 = document.createElement('td')

          rete.appendChild(tr)
          tr.appendChild(td1)
          tr.appendChild(td2)
          tr.appendChild(td3)
          tr.appendChild(td4)
          tr.appendChild(td5)
          tr.appendChild(td6)
          tr.appendChild(td7)
          tr.appendChild(td8)
          tr.appendChild(td9)
          tr.appendChild(td10)


          td1.textContent = doc.data().Codigo
          td2.textContent = doc.data().Asunto
          if (doc.data().Direccion == "Archivo de gestion") {
            td3.textContent = "x"
          }

          else if (doc.data().Direccion == "Archivo central") {
            td4.textContent = "x"
          }

          else {
            td5.textContent = "x"
          }

          if (doc.data().Disposicion == "Conservacion total") {
            td6.textContent = "x"
          }

          else if (doc.data().Disposicion == "Eliminacion") {
            td7.textContent = "x"
          }

          if (doc.data().Disposicion == "Microsegmentacion") {
            td8.textContent = "x"
          }

          if (doc.data().Disposicion == "Seleccion") {
            td9.textContent = "x"
          }

          td10.textContent = doc.data().Procedimiento

          td1.addEventListener('click', (e) => {
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
          })

          td2.addEventListener('click', (e) => {
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
          })

          td3.addEventListener('click', (e) => {
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
          })

          td4.addEventListener('click', (e) => {
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
          })

          td5.addEventListener('click', (e) => {
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
          })

          td6.addEventListener('click', (e) => {
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
          })

          td7.addEventListener('click', (e) => {
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
          })

          td8.addEventListener('click', (e) => {
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
          })

          td9.addEventListener('click', (e) => {
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
          })

          td10.addEventListener('click', (e) => {
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
          })

        })
      })

  } else {
    // User is signed out
    // ...
    modal5.classList.add('active')
  }
});

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
      location.href = "/Views/login/index.html"

    }).catch((error) => {
      // An error happened.
    });
  })
  window.addEventListener("keydown", (e) => {
    signOut(auth).then(() => {
      // Sign-out successful.
      location.href = "/Views/login/index.html"

    }).catch((error) => {
      // An error happened.
    });
  })


})


okBtn7.addEventListener('click', (e) => {
  var codigo = document.getElementById("codigo").value
  var band = false
  if (codigo.length != 0) {


    getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
      then((querySnapshot) => {
        querySnapshot.forEach((doc2) => {
          if (doc2.data().Codigo == codigo) {
            band = true

          }

        })
      }).then(() => {
        if (band == true) {
          modal6.classList.remove('active')
          modal20.classList.add('active')
          closeBtn20.addEventListener('click', () => {
            modal20.classList.remove('active')
          })
          tryAgain20.addEventListener('click', () => {
            modal20.classList.remove('active')
          })
          window.addEventListener('click', event => {
            if (event.target == modal20) {
              modal20.classList.remove('active')
            }
          })
        }
        else {
          modal30.classList.add('active')
          closeBtn130.addEventListener('click', () => {
            modal30.classList.remove('active')
          })
          tryAgain30.addEventListener('click', () => {
            modal30.classList.remove('active')
          })
          window.addEventListener('click', event => {
            if (event.target == modal30) {
              modal30.classList.remove('active')
            }
          })
        }
      }).then(() => {



        getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
          then((querySnapshot) => {
            querySnapshot.forEach((doc2) => {

              if (codigo == doc2.data().Codigo) {

                var codigo2 = document.getElementById("codigo2").value = doc2.data().Codigo
                var asunto = document.getElementById("asunto").value = doc2.data().Asunto
                var dire = document.getElementById("type").value = doc2.data().Direccion
                var dis = document.getElementById("disposicion")
                var proce = document.getElementById("procedimientos")

                if (doc2.data().Disposicion == "") {
                  dis.value = "0"
                }
                else {
                  dis.value = doc2.data().Disposicion
                }

                if (doc2.data().Procedimiento == "") {
                  proce.value = ""
                }
                else {
                  proce.value = doc2.data().Procedimiento
                }



              }
            })
          })

      })

  }
  else {
    modal31.classList.add('active')
    closeBtn131.addEventListener('click', () => {
      modal31.classList.remove('active')
    })
    tryAgain31.addEventListener('click', () => {
      modal31.classList.remove('active')
    })
    window.addEventListener('click', event => {
      if (event.target == modal31) {
        modal31.classList.remove('active')
      }
    })
  }


})


okBtn21.addEventListener('click', (e) => {


  var codigo2 = document.getElementById("codigo2").value
  var asunto = document.getElementById("asunto").value
  var dire = document.getElementById("type").value
  var dis = document.getElementById("disposicion").value
  var proce = document.getElementById("procedimientos").value


  if (codigo2.length != 0) {
    if (asunto != 0) {
      if (dire != 0) {
        if (dis != 0) {
          if (proce.length != 0) {
            if (proce.length < 370) {
              getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
                then((querySnapshot) => {
                  querySnapshot.forEach((doc2) => {
                    if (doc2.data().Codigo == codigo2) {
                      updateDoc(doc(db, "Entity", "idEntity", "Data_Documents", doc2.id), {
                        Asunto: asunto,
                        Codigo: codigo2,
                        Direccion: dire,
                        Disposicion: dis,
                        Procedimiento: proce,
                      })
                    }
                  })

                  loading.classList.add('active')
                  setTimeout(function () {
                    location.reload();
                  }, 2000);

                })
            }
            else {
              modal35.classList.add('active')
              closeBtn135.addEventListener('click', () => {
                modal35.classList.remove('active')
              })
              tryAgain35.addEventListener('click', () => {
                modal35.classList.remove('active')
              })
              window.addEventListener('click', event => {
                if (event.target == modal35) {
                  modal35.classList.remove('active')
                }
              })
            }
          }
          else {
            modal33.classList.add('active')
            closeBtn133.addEventListener('click', () => {
              modal33.classList.remove('active')
            })
            tryAgain33.addEventListener('click', () => {
              modal33.classList.remove('active')
            })
            window.addEventListener('click', event => {
              if (event.target == modal33) {
                modal33.classList.remove('active')
              }
            })
          }
        }
        else {
          modal34.classList.add('active')
          closeBtn134.addEventListener('click', () => {
            modal34.classList.remove('active')
          })
          tryAgain34.addEventListener('click', () => {
            modal34.classList.remove('active')
          })
          window.addEventListener('click', event => {
            if (event.target == modal34) {
              modal34.classList.remove('active')
            }
          })
        }
      }
      else {
        modal14.classList.add('active')
        closeBtn14.addEventListener('click', () => {
          modal14.classList.remove('active')
        })
        tryAgain14.addEventListener('click', () => {
          modal14.classList.remove('active')
        })
        window.addEventListener('click', event => {
          if (event.target == modal14) {
            modal14.classList.remove('active')
          }
        })
      }
    }
    else {
      modal32.classList.add('active')
      closeBtn132.addEventListener('click', () => {
        modal32.classList.remove('active')
      })
      tryAgain32.addEventListener('click', () => {
        modal32.classList.remove('active')
      })
      window.addEventListener('click', event => {
        if (event.target == modal32) {
          modal32.classList.remove('active')
        }
      })
    }
  }
  else {
    alert("No has llenado el campo de codigo")
  }

})

