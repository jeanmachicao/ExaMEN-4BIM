const firebaseConfig = {
    apiKey: "AIzaSyCom761uyC5AL27LI78ooRyjWi11F6Xi2E",
    authDomain: "examen-4bim.firebaseapp.com",
    projectId: "examen-4bim",
    storageBucket: "examen-4bim.appspot.com",
    messagingSenderId: "342928405488",
    appId: "1:342928405488:web:161f621250aeb4af2a6335"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
  let nombre = document.getElementById("name");
  let cel = document.getElementById("celphone");
  let save_btn = document.getElementById("save-btn");
  let lista = document.getElementById("lista");
  save_btn.addEventListener("click", () => {
    let data = {
      nombre: nombre.value,
    };
    save_data_firebase(data);
  });
  
  const save_data_firebase = (d) => {
    db.collection("contactos")
      .add(d)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        get_data_firebase();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  
  let contactos_arr = [];
  
  const get_data_firebase = () => {
    contactos_arr = [];
    db.collection("contactos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          contactos_arr.push(doc.data());
        });
        buildList();
      });
  };
  
  const buildList = () => {
    lista.innerHTML = "";
    contactos_arr.forEach((e) => {
      lista.insertAdjacentHTML(
        "beforeend",
        `
       <li>${e.nombre}</li>
      `
      );
    });
  };
  
  get_data_firebase();

let forma = document.getElementById("forma");


console.log(forma.value)