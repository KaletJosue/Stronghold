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
    // btnaccount
    var btnaccount = document.querySelector('.btnacount')
    var imgaccount = document.querySelector('.imghead')

    btnaccount.addEventListener('click', () => {
      location.href = '/views/admin/profile/profile.html'
    })

    imgaccount.addEventListener('click', () => {
      location.href = '/views/admin/profile/profile.html'
    })

    // sidebar.active
    const btnmenu = document.querySelector('.menu-btn')
    const sidebar = document.querySelector('.sidebar')

    const btnsidebar = document.getElementById('btnsidebar')
    const btnsidebar2 = document.getElementById('btnsidebar2')

    btnsidebar.addEventListener('click', () => {
      sidebar.classList.toggle('response')
    })

    btnsidebar2.addEventListener('click', () => {
      sidebar.classList.toggle('response')
    })

    sidebar.classList.add('active')

    btnmenu.addEventListener('click', () => {
      sidebar.classList.toggle('active')
    })

    // Dark Mode
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        const body = document.body
        const checkbox = document.querySelector('.theme-switch__checkbox');
        const palanca = document.querySelector('.theme-switch__checkbox')

        getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
          then((querySnapshot) => {
            querySnapshot.forEach((doc2) => {
              getDoc(doc(db, "Users", user.uid, "Private_Data", doc2.data().DarkMode)).
                then((docSnap) => {
                  if (doc2.data().DarkMode == "desactive") {
                    body.classList.remove('dark-mode')
                    checkbox.checked = false
                  }
                  else if (doc2.data().DarkMode == "active") {
                    body.classList.add('dark-mode')
                    checkbox.checked = true
                  }
                  else {
                    body.classList.add('dark-mode')
                    checkbox.checked = true
                  }
                })
            })
          })

        palanca.addEventListener('click', () => {
          getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
            then((querySnapshot) => {
              querySnapshot.forEach((doc2) => {
                getDoc(doc(db, "Users", user.uid, "Private_Data", doc2.data().DarkMode)).
                  then((docSnap) => {
                    if (doc2.data().DarkMode == "desactive") {
                      getDocs(collection(db, "Users", user.uid, "Private_Data"))
                        .then((querySnapshot) => {
                          querySnapshot.forEach((doc) => {
                            updateDoc(doc.ref, {
                              DarkMode: 'active'
                            })
                          })
                        })
                    }
                    else if (doc2.data().DarkMode == "active") {
                      getDocs(collection(db, "Users", user.uid, "Private_Data"))
                        .then((querySnapshot) => {
                          querySnapshot.forEach((doc) => {
                            updateDoc(doc.ref, {
                              DarkMode: 'desactive'
                            })
                          })
                        })
                    }
                    else {
                      getDocs(collection(db, "Users", user.uid, "Private_Data"))
                        .then((querySnapshot) => {
                          querySnapshot.forEach((doc) => {
                            updateDoc(doc.ref, {
                              DarkMode: 'desactive'
                            })
                          })
                        })
                    }
                  })
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

    // name and rol
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        getDocs(query(collection(db, "Users", user.uid, "Private_Data"), where("Id", "==", user.uid))).
          then((querySnapshot) => {
            querySnapshot.forEach((doc2) => {
              const name = document.querySelector('.namehead')
              const rol = document.querySelector('.rol')

              const imghead = document.querySelector('.imghead')

              var cadena = doc2.data().Nombre
              var palabras = cadena.split(" ")

              var dosPrimerasPalabras = palabras.slice(0, 2).join(' ')

              name.textContent = dosPrimerasPalabras
              rol.textContent = doc2.data().Rol

              if (doc2.data().URL == "") {
                imghead.src = "/assets/profile_vacio.png"
              } else {
                imghead.src = doc2.data().URL
              }
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

    const palanca = document.querySelector('.theme-switch__checkbox')
    const body = document.body

    palanca.addEventListener('click', () => {
      body.classList.toggle('dark-mode')
    })

    // logout
    const closeBtn2 = document.querySelector('.closeIcon2')
    const tryAgain2 = document.getElementById('okBtn2')
    const cancelAgain2 = document.getElementById('cancelBtn2')
    const modal2 = document.querySelector('.modal2')

    const logout = document.getElementById('logout')

    logout.addEventListener('click', () => {
      modal2.classList.add('active')
      closeBtn2.addEventListener('click', () => {
        modal2.classList.remove('active')
      })
      cancelAgain2.addEventListener('click', () => {
        modal2.classList.remove('active')
      })
      tryAgain2.addEventListener('click', () => {
        signOut(auth).then(() => {
          location.href = "/index.html"
        }).catch((error) => {
          // An error happened.
        });
      })
      window.addEventListener('click', event => {
        if (event.target == modal2) {
          modal2.classList.remove('active')
        }
      })
    })

    // tables

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        getDocs(collection(db, "Entity", "idEntity", "Data_Documents"))
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

              var container = document.querySelector('.container')
              var tr = document.createElement('tr')
              var td1 = document.createElement('th')
              var td2 = document.createElement('th')
              var td3 = document.createElement('th')
              var td4 = document.createElement('th')
              var td5 = document.createElement('th')
              var td6 = document.createElement('th')
              var td7 = document.createElement('th')
              var td8 = document.createElement('th')
              var td9 = document.createElement('th')
              var td10 = document.createElement('th')

              td1.textContent = doc.data().Codigo
              td2.textContent = doc.data().Nombre

              if (doc.data().Direccion == "Archivo de Gestion") {
                td3.textContent = 'x'
              } else if (doc.data().Direccion == "Archivo Central") {
                td4.textContent = 'x'
              } else if (doc.data().Direccion == "Archivo Historico") {
                td5.textContent = 'x'
              }

              if (doc.data().Disposicion == "CT") {
                td6.textContent = 'x'
              } else if (doc.data().Disposicion == "E") {
                td7.textContent = 'x'
              } else if (doc.data().Disposicion == "M") {
                td8.textContent = 'x'
              } else if (doc.data().Disposicion == "S") {
                td9.textContent = 'x'
              }

              td10.textContent = doc.data().Procedimiento

              tr.className = "trs"

              container.appendChild(tr)
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

              tr.addEventListener('click', () => {
                const closeBtn3 = document.querySelector('.closeIcon3')
                const tryAgain3 = document.getElementById('okBtn3')
                const modal3 = document.querySelector('.modal3')

                modal3.classList.add('active')
                closeBtn3.addEventListener('click', () => {
                  modal3.classList.remove('active')
                })
                tryAgain3.addEventListener('click', () => {

                  var code = document.getElementById('code')
                  var band = false

                  const closeBtn4 = document.querySelector('.closeIcon4')
                  const tryAgain4 = document.getElementById('okBtn4')
                  const modal4 = document.querySelector('.modal4')
                  const textModal4 = document.querySelector('.textModal4')

                  if (code.value.length != 0) {
                    getDocs(collection(db, "Entity", "idEntity", "Data_Documents"))
                      .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {

                          if (code.value == doc.data().Codigo) {
                            band = true
                          }

                        })
                      }).then(() => {

                        if (band == true) {
                          getDocs(collection(db, "Entity", "idEntity", "Data_Documents"))
                            .then((querySnapshot) => {
                              querySnapshot.forEach((doc2) => {
                                if (code.value == doc2.data().Codigo) {
                                  
                                  modal3.classList.remove('active')

                                }
                              })
                            })
                        } else {
                          textModal4.textContent = `El codigo "${code.value}" no corresponde a ningun archivo, intenta de nuevo`
                          modal4.classList.add('active')
                          closeBtn4.addEventListener('click', () => {
                            modal4.classList.remove('active')
                          })
                          tryAgain4.addEventListener('click', () => {
                            modal4.classList.remove('active')
                          })
                          window.addEventListener('click', event => {
                            if (event.target == modal4) {
                              modal4.classList.remove('active')
                            }
                          })
                        }

                      }).then(() => {
                        getDocs(collection(db, 'Entity', 'idEntity', 'Data_Documents'))
                          .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                              if (code.value == doc.data().Codigo) {
                                alert(doc.data().Nombre)
                                alert(doc.data().Codigo)
                                alert(doc.data().Direccion)
                                alert(doc.data().Disposicion)
                                alert(doc.data().Procedimiento)
                                code.value = ''
                              }
                            })
                          })
                      })
                  } else {
                    textModal4.textContent = `Debes colocar el codigo del archivo a buscar`
                    modal4.classList.add('active')
                    closeBtn4.addEventListener('click', () => {
                      modal4.classList.remove('active')
                    })
                    tryAgain4.addEventListener('click', () => {
                      modal4.classList.remove('active')
                    })
                    window.addEventListener('click', event => {
                      if (event.target == modal4) {
                        modal4.classList.remove('active')
                      }
                    })
                  }

                })
                window.addEventListener('click', event => {
                  if (event.target == modal3) {
                    modal3.classList.remove('active')
                  }
                })
              })
            });
          })

        // Search
        var search = document.getElementById('search')

        search.addEventListener("input", e => {
          document.querySelectorAll('.trs').forEach(documento => {

            let originalString = documento.textContent;
            let palabrasAEliminar = ["x"];
            let regex = new RegExp(palabrasAEliminar.join('|') + '|:', 'g');

            let documentoLimpio = originalString
              .replace(regex, '')
              .replace(/\s+/g, '');

            documentoLimpio.toLowerCase().includes(e.target.value.toLowerCase())
              ? documento.classList.remove("filtro")
              : documento.classList.add("filtro");

          });
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
