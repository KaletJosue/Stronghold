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
                                code.value = ''

                                var modalUpdate = document.querySelector('.modalupdate')
                                var closeBtnUpdate = document.querySelector('.closeupdate')

                                var codeUpdate = document.getElementById('codeUpdate')
                                var nameUpdate = document.getElementById('nameUpdate')
                                var procdUpdate = document.getElementById('procUpdate')

                                codeUpdate.value = doc.data().Codigo
                                nameUpdate.value = doc.data().Nombre
                                procdUpdate.value = doc.data().Procedimiento
                                sBtn_text2.textContent = doc.data().Direccion

                                if (doc.data().Disposicion == '') {
                                  sBtn_text.textContent = 'Selecciona una disposición'
                                } else if (doc.data().Disposicion == "CT") {
                                  sBtn_text.textContent = 'Conservacion Total'
                                } else if (doc.data().Disposicion == "M") {
                                  sBtn_text.textContent = 'Microsegmentacion'
                                } else if (doc.data().Disposicion == "E") {
                                  sBtn_text.textContent = 'Eliminacion'
                                } else if (doc.data().Disposicion == "S") {
                                  sBtn_text.textContent = 'Seleccion'
                                }

                                modalUpdate.classList.add('active')
                                modalUpdate.classList.remove('out')
                                closeBtnUpdate.addEventListener('click', () => {
                                  modalUpdate.classList.add('out')
                                  modalUpdate.classList.remove('active')
                                  codeUpdate.value = ''
                                  nameUpdate.value = ''
                                  procdUpdate.value = ''

                                  sBtn_text.textContent = 'Selecciona una retencion'
                                  sBtn_text2.textContent = 'Selecciona una disposición'
                                })
                                window.addEventListener('click', event => {
                                  if (event.target == modalUpdate) {
                                    modalUpdate.classList.add('out')
                                    modalUpdate.classList.remove('active')
                                    codeUpdate.value = ''
                                    nameUpdate.value = ''
                                    procdUpdate.value = ''

                                    sBtn_text.textContent = 'Selecciona una retencion'
                                    sBtn_text2.textContent = 'Selecciona una disposición'
                                  }
                                })
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

        // Update

        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;

            var btnUpdate = document.querySelector('.btnUpdate')

            const closeBtn4 = document.querySelector('.closeIcon4')
            const tryAgain4 = document.getElementById('okBtn4')
            const modal4 = document.querySelector('.modal4')
            const textModal4 = document.querySelector('.textModal4')

            btnUpdate.addEventListener('click', () => {
              var codeUpdate = document.querySelector('#codeUpdate').value
              var nameUpdate = document.querySelector('#nameUpdate').value
              var procUpdate = document.querySelector('#procUpdate').value
              var dispUpdate = ''
              var reteUpdate = sBtn_text2.textContent

              if (sBtn_text.textContent == "Conservacion Total") {
                dispUpdate = 'CT'
              } else if (sBtn_text.textContent == "Microsegmentacion") {
                dispUpdate = 'M'
              } else if (sBtn_text.textContent == "Eliminacion") {
                dispUpdate = 'E'
              } else if (sBtn_text.textContent == "Seleccion") {
                dispUpdate = 'S'
              } else if (sBtn_text.textContent == "Selecciona una disposición") {
                dispUpdate = 'Selecciona una disposición'
              }

              if (procUpdate.length != 0) {
                if (reteUpdate != "Selecciona una retencion") {
                  if (dispUpdate != "Selecciona una disposición") {

                    const closeBtn5 = document.querySelector('.closeIcon5')
                    const tryAgain5 = document.getElementById('okBtn5')
                    const modal5 = document.querySelector('.modal5')
                    const textModal5 = document.querySelector('.textModal5')

                    getDocs(collection(db, "Entity", "idEntity", "Data_Documents"))
                      .then((querySnapshot) => {
                        querySnapshot.forEach((doc2) => {
                          if (doc2.data().Codigo == codeUpdate) {
                            updateDoc(doc(db, "Entity", "idEntity", "Data_Documents", doc2.id), {
                              Procedimiento: procUpdate,
                              Disposicion: dispUpdate,
                              Direccion: reteUpdate
                            })
                            .then(() => {
                              textModal5.textContent = `El documento con nombre ${nameUpdate} se actualizo`
                              modal5.classList.add('active')
                              closeBtn5.addEventListener('click', () => {
                                modal5.classList.remove('active')
                                setTimeout(function () {
                                  location.reload();
                                }, 1)
                              })
                              tryAgain5.addEventListener('click', () => {
                                modal5.classList.remove('active')
                                setTimeout(function () {
                                  location.reload();
                                }, 1)
                              })
                              window.addEventListener('click', event => {
                                if (event.target == modal5) {
                                  modal5.classList.remove('active')
                                  setTimeout(function () {
                                    location.reload();
                                  }, 1)
                                }
                              })
                            })
                          }
                        });
                      })

                  } else {
                    textModal4.textContent = `Debes colocar la disposición del archivo`
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
                } else {
                  textModal4.textContent = `Debes colocar la retencion del archivo`
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
              } else {
                textModal4.textContent = `Debes colocar el proceso del archivo`
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

        // selects

        var optionMenu = document.querySelector(".select-menu")
        var selectBtn = optionMenu.querySelector(".select-btn")
        var options = optionMenu.querySelectorAll(".option")
        var sBtn_text = optionMenu.querySelector(".sBtn-text")
        var opt = optionMenu.querySelector('.options')

        var optionMenu2 = document.querySelector(".select-menu2")
        var selectBtn2 = optionMenu2.querySelector(".select-btn2")
        var options2 = optionMenu2.querySelectorAll(".option2")
        var sBtn_text2 = optionMenu2.querySelector(".sBtn-text2")
        var opt2 = optionMenu2.querySelector('.options2')

        optionMenu.classList.add('active')
        optionMenu2.classList.add('active')

        selectBtn.addEventListener('click', () => {
          optionMenu.classList.toggle('active')
          optionMenu2.classList.add('active')

          window.addEventListener('click', event => {
            if (event.target == opt) {
              optionMenu.classList.add('active')
            }
          })
        })
        selectBtn2.addEventListener('click', () => {
          optionMenu.classList.add('active')
          optionMenu2.classList.toggle('active')

          window.addEventListener('click', event => {
            if (event.target == opt2) {
              optionMenu2.classList.add('active')
            }
          })
        })

        options.forEach(option => {
          option.addEventListener('click', () => {
            var selectedOption = option.querySelector('.option-text').innerText
            sBtn_text.textContent = selectedOption

            optionMenu.classList.toggle('active')
          })
        })

        options2.forEach(option2 => {
          option2.addEventListener('click', () => {
            var selectedOption2 = option2.querySelector('.option-text2').innerText
            sBtn_text2.textContent = selectedOption2

            optionMenu2.classList.toggle('active')
          })
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
