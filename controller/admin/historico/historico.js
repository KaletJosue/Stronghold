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

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        getDocs(collection(db, "Entity", "idEntity", "Data_Documents"))
          .then((querySnapshot) => {
            let archivoEncontrado = false;

            querySnapshot.forEach((doc) => {
              if (doc.data().Direccion == "Archivo Historico") {
                archivoEncontrado = true;

                var containermain = document.querySelector('.containermain');
                var div = document.createElement('div');
                var h3 = document.createElement('h3');
                var p = document.createElement('p');
                var img = document.createElement('img');
                var divin = document.createElement('div');
                var h4 = document.createElement('h4');
                var h42 = document.createElement('h4');
                var span = document.createElement('span');
                var span2 = document.createElement('span');

                h3.textContent = doc.data().Nombre;
                p.textContent = doc.data().Codigo;
                h4.textContent = "Fecha: ";
                h42.textContent = "Asunto: ";
                span.textContent = doc.data().Fecha;
                span2.textContent = doc.data().Asunto;

                div.className = "con_pdf";
                img.src = "/assets/pdf.png";

                containermain.appendChild(div);
                div.appendChild(h3);
                div.appendChild(p);
                div.appendChild(img);
                div.appendChild(divin);
                divin.appendChild(h4);
                h4.appendChild(span);
                divin.appendChild(h42);
                h42.appendChild(span2);

                div.addEventListener('click', () => {
                  window.open(doc.data().URL, "_blank");
                });
              }
            });

            if (!archivoEncontrado) {
              let div = document.createElement('div')
              let img = document.createElement('img')
              let h1 = document.createElement('h1')
              let main = document.querySelector('.main')

              div.className = 'nada'
              img.src = "/assets/img_nada.svg"
              h1.textContent = "Sin archivos en esta carpeta"

              main.appendChild(div)
              div.appendChild(img)
              div.appendChild(h1)
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

    // Search

    var search = document.getElementById('search')

    search.addEventListener("input", e => {
      document.querySelectorAll('.con_pdf').forEach(documento => {

        let originalString = documento.textContent;
        let palabrasAEliminar = ["Fecha", "Asunto"];
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
