// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

    getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
      then(querySnapshot => {
        querySnapshot.forEach((doc) => {

          //doc.data() is never undefined for query doc snapshots

          var name = document.getElementById("name-in")
          var name2 = document.getElementById("name-in2")

          name.value = doc.data().Nombre
          name2.value = doc.data().Rol

        })
      })

    getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {



          var div = document.createElement('div')
          var img = document.createElement('img')
          var text = document.createElement('p')

          div.className = "box"
          text.textContent = doc.data().Nombre
          img.src = "/Stronghold/Assets/pdf.svg"
          img.className = "tam"



          img.addEventListener('click', (e) => {
            window.open(doc.data().URL, doc.data().Nombre)
          })

          text.addEventListener('click', (e) => {
            window.open(doc.data().URL, doc.data().Nombre)
          })

          div.appendChild(img)
          div.appendChild(text)

        })
      })

  } else {
    // User is signed out
    // ...
    modal5.classList.add('active')
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        location.href = "/Stronghold/Views/login/index.html"
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
      location.href = "/Stronghold/Views/login/index.html"

    }).catch((error) => {
      // An error happened.
    });
  })
  window.addEventListener("keydown", (e) => {
    signOut(auth).then(() => {
      // Sign-out successful.
      location.href = "/Stronghold/Views/login/index.html"

    }).catch((error) => {
      // An error happened.
    });
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

const modalBtn13 = document.getElementById('login')
const closeBtn13 = document.querySelector('.closeIcon13')
const tryAgain13 = document.getElementById('okBtn13')
const modal13 = document.querySelector('.modal13')

const modalBtn14 = document.getElementById('login')
const closeBtn14 = document.querySelector('.closeIcon14')
const tryAgain14 = document.getElementById('okBtn14')
const modal14 = document.querySelector('.modal14')

const modalBtn15 = document.getElementById('login')
const closeBtn15 = document.querySelector('.closeIcon15')
const tryAgain15 = document.getElementById('okBtn15')
const modal15 = document.querySelector('.modal15')

const modalBtn16 = document.getElementById('login')
const closeBtn16 = document.querySelector('.closeIcon16')
const tryAgain16 = document.getElementById('okBtn16')
const modal16 = document.querySelector('.modal16')

const modalBtn17 = document.getElementById('login')
const closeBtn17 = document.querySelector('.closeIcon17')
const tryAgain17 = document.getElementById('okBtn17')
const modal17 = document.querySelector('.modal17')

const modalBtn18 = document.getElementById('login')
const closeBtn18 = document.querySelector('.closeIcon18')
const tryAgain18 = document.getElementById('okBtn18')
const modal18 = document.querySelector('.modal18')

const loading = document.querySelector('.loading')

const close = document.querySelector('.btn__close')


up__document.addEventListener('click', (e) => {
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



okBtn7.addEventListener('click', (e) => {

  const veri = document.getElementById('up__ar')
  const veri2 = document.getElementById('up__ar').value
  const name__up = document.getElementById('name__up-ar').value
  const asunto = document.getElementById('asunto').value
  const cargo = document.getElementById('cargo').value
  const tipo = document.getElementById('type').value
  var date = new Date()
  var today = new Date();
  var now = today.toLocaleTimeString('en-US');
  const fin = document.getElementById('fin').value
  var band = false

  if (veri2.length != 0) {
    if (name__up.length != 0) {
      if (asunto != 0) {
        if (cargo != 0) {
          if (tipo != 0) {
            if (name__up.length <= 12) {
              if (fin.length != 0) {
                modal6.classList.remove('active')

                // Upload file and metadata to the object 'images/mountains.jpg'

                onAuthStateChanged(auth, (user) => {

                  const modal5 = document.querySelector('.modal5')

                  if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;

                    getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
                      then((querySnapshot) => {

                        querySnapshot.forEach((doc) => {
                          if (fin == doc.data().Codigo) {

                            band = true
                          }
                        })
                      }).then(() => {

                        if (band == true) {
                          modal18.classList.add('active')
                          closeBtn18.addEventListener('click', () => {
                            modal18.classList.remove('active')
                          })
                          tryAgain18.addEventListener('click', () => {
                            modal18.classList.remove('active')
                          })
                          window.addEventListener('click', event => {
                            if (event.target == modal18) {
                              modal18.classList.remove('active')
                            }
                          })
                        }

                        else {
                          const storageRef = ref(storage, 'Documentos/' + user.uid + "/" + name__up);
                          const uploadTask = uploadBytesResumable(storageRef, veri.files[0]);

                          // Listen for state changes, errors, and completion of the upload.
                          uploadTask.on('state_changed',
                            (snapshot) => {
                              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                              loading.classList.add('active')

                              console.log('Upload is ' + progress + ' % done');


                              switch (snapshot.state) {
                                case 'paused':
                                  console.log('Upload is paused');
                                  break;
                                case 'running':
                                  console.log('Upload is running');
                                  break;








                              }


                            },
                            (error) => {
                              // A full list of error codes is available at
                              // https://firebase.google.com/docs/storage/web/handle-errors
                              switch (error.code) {
                                case 'storage/unauthorized':
                                  // User doesn't have permission to access the object
                                  alert(error)
                                  break;
                                case 'storage/canceled':
                                  // User canceled the upload
                                  alert(error)
                                  break;

                                // ...

                                case 'storage/unknown':
                                  // Unknown error occurred, inspect error.serverResponse
                                  break;
                              }
                            },
                            // crea un nuevo objeto `Date`

                            () => {
                              // Upload completed successfully, now we can get the download URL
                              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                addDoc(collection(db, "Entity", "idEntity", "Data_Documents"), {
                                  Nombre: name__up,
                                  URL: downloadURL,
                                  IdUser: user.uid,
                                  Asunto: asunto,
                                  Rol: cargo,
                                  Direccion: tipo,
                                  Fecha: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                                  Hora: (now),
                                  Codigo: fin,
                                  Disposicion: "",
                                  Procedimiento: "",
                                })

                                modal12.classList.add('active')
                                loading.classList.remove('active')
                                closeBtn12.addEventListener('click', () => {
                                  modal12.classList.remove('active')
                                })
                                tryAgain12.addEventListener('click', () => {
                                  modal12.classList.remove('active')
                                })
                                window.addEventListener('click', event => {
                                  if (event.target == modal12) {
                                    modal12.classList.remove('active')
                                  }
                                })

                                setTimeout(function () {
                                  location.reload();
                                }, 2000);

                              });




                            }
                          );
                        }

                        // ...
                      })






                  } else {
                    // User is signed out
                    // ...
                    modal5.classList.add('active')
                    window.addEventListener("keydown", (e) => {
                      signOut(auth).then(() => {
                        // Sign-out successful.
                        location.href = "/Stronghold/index.html"

                      }).catch((error) => {
                        // An error happened.
                      });
                    })
                  }



                })


              }

              else {
                modal17.classList.add('active')
                closeBtn17.addEventListener('click', () => {
                  modal17.classList.remove('active')
                })
                tryAgain17.addEventListener('click', () => {
                  modal17.classList.remove('active')
                })
                window.addEventListener('click', event => {
                  if (event.target == modal17) {
                    modal17.classList.remove('active')
                  }
                })
              }

            }

            else {
              modal13.classList.add('active')
              closeBtn13.addEventListener('click', () => {
                modal13.classList.remove('active')
              })
              tryAgain13.addEventListener('click', () => {
                modal13.classList.remove('active')
              })
              window.addEventListener('click', event => {
                if (event.target == modal13) {
                  modal13.classList.remove('active')
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
          modal15.classList.add('active')
          closeBtn15.addEventListener('click', () => {
            modal15.classList.remove('active')
          })
          tryAgain15.addEventListener('click', () => {
            modal15.classList.remove('active')
          })
          window.addEventListener('click', event => {
            if (event.target == modal15) {
              modal15.classList.remove('active')
            }
          })
        }
      }
      else {
        modal16.classList.add('active')
        closeBtn16.addEventListener('click', () => {
          modal16.classList.remove('active')
        })
        tryAgain16.addEventListener('click', () => {
          modal16.classList.remove('active')
        })
        window.addEventListener('click', event => {
          if (event.target == modal16) {
            modal16.classList.remove('active')
          }
        })
      }

    }

    else {
      modal10.classList.add('active')
      closeBtn10.addEventListener('click', () => {
        modal10.classList.remove('active')
      })
      tryAgain10.addEventListener('click', () => {
        modal10.classList.remove('active')
      })
      window.addEventListener('click', event => {
        if (event.target == modal10) {
          modal10.classList.remove('active')
        }
      })
    }

  }
  else {
    modal11.classList.add('active')
    closeBtn11.addEventListener('click', () => {
      modal11.classList.remove('active')
    })
    tryAgain11.addEventListener('click', () => {
      modal11.classList.remove('active')
    })
    window.addEventListener('click', event => {
      if (event.target == modal11) {
        modal11.classList.remove('active')
      }
    })
  }
})






