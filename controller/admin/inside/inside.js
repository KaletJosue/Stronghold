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

    // buttons inside

    var btn_register = document.querySelector('#register')

    btn_register.addEventListener('click', () => {
      window.open("/views/admin/register_user/register_user.html", "_blank")
    })

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

  var optionMenu3 = document.querySelector(".select-menu3")
  var selectBtn3 = optionMenu3.querySelector(".select-btn3")
  var options3 = optionMenu3.querySelectorAll(".option3")
  var sBtn_text3 = optionMenu3.querySelector(".sBtn-text3")
  var opt3 = optionMenu3.querySelector('.options3')

  optionMenu.classList.add('active')
  optionMenu2.classList.add('active')
  optionMenu3.classList.add('active')

  selectBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active')
    optionMenu2.classList.add('active')
    optionMenu3.classList.add('active')

    window.addEventListener('click', event => {
      if (event.target == opt) {
        optionMenu.classList.add('active')
      }
    })
  })
  selectBtn2.addEventListener('click', () => {
    optionMenu.classList.add('active')
    optionMenu2.classList.toggle('active')
    optionMenu3.classList.add('active')

    window.addEventListener('click', event => {
      if (event.target == opt2) {
        optionMenu2.classList.add('active')
      }
    })
  })
  selectBtn3.addEventListener('click', () => {
    optionMenu.classList.add('active')
    optionMenu2.classList.add('active')
    optionMenu3.classList.toggle('active')

    window.addEventListener('click', event => {
      if (event.target == opt3) {
        optionMenu3.classList.add('active')
      }
    })
  })

  options.forEach(option => {
    option.addEventListener('click', () => {
      var selectedOption = option.querySelector('.option-text').innerText
      sBtn_text.textContent = selectedOption

      asunto_file = selectedOption
      optionMenu.classList.toggle('active')
    })
  })

  options2.forEach(option2 => {
    option2.addEventListener('click', () => {
      var selectedOption2 = option2.querySelector('.option-text2').innerText
      sBtn_text2.textContent = selectedOption2

      disposicion_file = selectedOption2
      optionMenu2.classList.toggle('active')
    })
  })

  options3.forEach(option3 => {
    option3.addEventListener('click', () => {
      var selectedOption3 = option3.querySelector('.option-text3').innerText
      sBtn_text3.textContent = selectedOption3

      visualizacion_file = selectedOption3
      optionMenu3.classList.toggle('active')
    })
  })

  // Up Document

  var up_document = document.getElementById("up_document")
  const modal_document = document.querySelector(".modal_document")
  const iconcloseBtn_document = document.querySelector(".closeIcon2_document")
  const closeBtn_document = document.querySelector('.closeBtn-document')

  var btnadd = document.querySelector('#btnadd-document')
  var name_files = document.querySelector('.name_files')

  var loading = document.querySelector('.loading')
  var pLoading = document.querySelector('.textLoader')

  // Variables Documents

  var file = document.getElementById('file')
  var name_file = document.querySelector('#name_file')
  var code_file = document.getElementById('code_file')
  var date = new Date()
  var today = new Date();
  var now = today.toLocaleTimeString('en-US');
  var asunto_file = ""
  var disposicion_file = ""
  var visualizacion_file = ""

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;

      up_document.addEventListener("click", () => {
        modal_document.classList.add('active')
        closeBtn_document.addEventListener('click', () => {
          modal_document.classList.remove('active')
        })
        iconcloseBtn_document.addEventListener('click', () => {
          modal_document.classList.remove('active')
        })
        window.addEventListener('click', event => {
          if (event.target == modal_document) {
            modal_document.classList.remove('active')
          }
        })

        file.addEventListener('change', () => {
          const documents = file.files[0]

          if (documents) {
            name_files.textContent = documents.name
            name_file.value = documents.name.replace(".pdf", "")
          } else {
            name_files.textContent = ""
            name_file.value = ""
          }
        })
      })


      btnadd.addEventListener('click', () => {
        const closeBtn3 = document.querySelector('.closeIcon3')
        const tryAgain3 = document.getElementById('okBtn3')
        const modal3 = document.querySelector('.modal3')
        const textModal3 = document.querySelector('.textModal3')

        const closeBtn4 = document.querySelector('.closeIcon4')
        const tryAgain4 = document.getElementById('okBtn4')
        const modal4 = document.querySelector('.modal4')
        const textModal4 = document.querySelector('.textModal4')

        // Carga del documento

        if (file.value.length != 0) {
          if (name_file.value.length != 0) {
            if (code_file.value.length != 0) {
              if (asunto_file != "") {
                if (disposicion_file != "") {
                  if (visualizacion_file != "") {

                    onAuthStateChanged(auth, (user) => {
                      if (user) {

                        var band_name = false
                        var band_code = false

                        getDocs(collection(db, "Entity", "idEntity", "Data_Documents")).
                          then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                              if (name_file.value == doc.data().Nombre) {
                                band_name = true
                              }

                              if (code_file.value == doc.data().Codigo) {
                                band_code = true
                              }
                            })
                          }).then(() => {

                            if (band_name == false) {
                              if (band_code == false) {

                                const uid = user.uid;

                                const storageRef = ref(storage, 'Documentos/' + user.uid + name_file.value);
                                const uploadTask = uploadBytesResumable(storageRef, file.files[0]);

                                uploadTask.on('state_changed',
                                  (snapshot) => {
                                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                    console.log('Upload is ' + progress + '% done');
                                    loading.classList.add('active')
                                    pLoading.textContent = `Estamos subiendo el archivo (${name_file.value}) espera un poco`
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
                                    switch (error.code) {
                                      case 'storage/unauthorized':
                                        break;
                                      case 'storage/canceled':
                                        break;
                                      case 'storage/unknown':
                                        break;
                                    }
                                    loading.classList.remove('active')
                                    textModal3.textContent = "Lo sentimos, no pudimos subir tu archivo"
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
                                  },
                                  () => {
                                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                      addDoc(collection(db, "Entity", "idEntity", "Data_Documents"), {
                                        Nombre: name_file.value,
                                        URL: downloadURL,
                                        IdUser: user.uid,
                                        Asunto: asunto_file,
                                        Rol: visualizacion_file,
                                        Direccion: disposicion_file,
                                        Fecha: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                                        Hora: (now),
                                        Codigo: code_file.value,
                                        Disposicion: "",
                                        Procedimiento: "",
                                      })
                                    });

                                    loading.classList.remove('active')
                                    textModal4.textContent = `Hecho, el archivo con nombre (${name_file.value}) está subido. Revísalo en la carpeta "${disposicion_file}"`
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
                                );

                              } else {
                                textModal3.textContent = `El archivo con codigo (${code_file.value}) ya esta subido`
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
                            } else {
                              textModal3.textContent = `El archivo con nombre (${name_file.value}) ya esta subido`
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
                    textModal3.textContent = "Debes asignarle una visualizacion al documento"
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
                } else {
                  textModal3.textContent = "Debes asignarle una disposición al documento"
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
              } else {
                textModal3.textContent = "Debes asignarle un asunto al documento"
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
            } else {
              textModal3.textContent = "Debes asignarle un codigo al documento"
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
          } else {
            textModal3.textContent = "Debes asignarle un nombre al documento"
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
        } else {
          textModal3.textContent = "Debes agregar un documento antes de subirlo"
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

});
