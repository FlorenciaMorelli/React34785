import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtwr4v8l0kcRWnZX5d_5sf0EOIjWwXeH0",
    authDomain: "react34785-16ce9.firebaseapp.com",
    projectId: "react34785-16ce9",
    storageBucket: "react34785-16ce9.appspot.com",
    messagingSenderId: "719563363301",
    appId: "1:719563363301:web:950fd35971263deb04550c",
    measurementId: "G-J8L0QSPZSP"
};

const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);

export function testDatabase() {
  console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {
  try { 
    const docRef = doc(DB, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("El producto no existe");
    }
  }
  catch(error){
    throw error;
  }
}

// async/await -> try/catch
export async function getItemsFromAPI() {
  try {
    // 1. Necesito conectarme a la colección de "productos" con "collection"
    const collectionProducts = collection(DB, "products");

    // 2. Necesito traer todos los documentos existentes con getDocs
    let respuesta = await getDocs(collectionProducts);

    // 3. Extramos la data de nuestros productos y la mapeamos con "map"
    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });

    // 4. Retornamos el listado de productos mapeado
    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));

  const productsSnap = await getDocs(myQuery);

  const emptyArray = productsSnap.docs.length < 1;

  if (emptyArray) throw new Error("Categoría sin resultados");

  const products = productsSnap.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });

  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);

  return docRef.id;
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductsRef = collection(DB, "products");
  const collectionOrdersRef = collection(DB, "buyorders");
  const batch = writeBatch(DB);

  let arrayIds = buyOrderData.items.map((item) => {
    return item.id;
  });

  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

  let productsSnapshot = await getDocs(q);

  productsSnapshot.docs.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
    let stockActualizado = stockActual - itemInCart.count;

    batch.update(doc.ref, { stock: stockActualizado });
  });

  const docOrderRef = doc(collectionOrdersRef);
  batch.set(docOrderRef, buyOrderData);

  batch.commit();

  return docOrderRef.id;
}

export async function exportItemsToFirestore() {
  const items = [{
    "id": 1,
    "title": "Castleman",
    "price": 1454,
    "stock": 111,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/163x100.png/ff4444/ffffff",
    "brand": "Promethazine Hydrochloride"
  }, {
    "id": 2,
    "title": "Campbell",
    "price": 8860,
    "stock": 67,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/204x100.png/ff4444/ffffff",
    "brand": "Escavite D"
  }, {
    "id": 3,
    "title": "Mehaffey",
    "price": 1461,
    "stock": 185,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/153x100.png/dddddd/000000",
    "brand": "Telmisartan"
  }, {
    "id": 4,
    "title": "Craythorn",
    "price": 8136,
    "stock": 114,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/155x100.png/dddddd/000000",
    "brand": "Diazepam"
  }, {
    "id": 5,
    "title": "Signorelli",
    "price": 3355,
    "stock": 253,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
    "brand": "Ibutilide Fumarate"
  }, {
    "id": 6,
    "title": "Patley",
    "price": 4618,
    "stock": 28,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/242x100.png/5fa2dd/ffffff",
    "brand": "Haddock"
  }, {
    "id": 7,
    "title": "Knox",
    "price": 230,
    "stock": 99,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/132x100.png/dddddd/000000",
    "brand": "DIGOX"
  }, {
    "id": 8,
    "title": "Folcarelli",
    "price": 494,
    "stock": 20,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/183x100.png/dddddd/000000",
    "brand": "Quetiapine fumarate"
  }, {
    "id": 9,
    "title": "Stobbie",
    "price": 9447,
    "stock": 2,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/129x100.png/dddddd/000000",
    "brand": "OXYGEN"
  }, {
    "id": 10,
    "title": "Kahane",
    "price": 3328,
    "stock": 134,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/210x100.png/ff4444/ffffff",
    "brand": "LBEL COULEUR LUXE AMPLIFIER XP"
  }, {
    "id": 11,
    "title": "Radbourne",
    "price": 2687,
    "stock": 157,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/145x100.png/cc0000/ffffff",
    "brand": "babies r us infants pain relief"
  }, {
    "id": 12,
    "title": "Ricciardelli",
    "price": 4017,
    "stock": 227,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/238x100.png/cc0000/ffffff",
    "brand": "Glyburide"
  }, {
    "id": 13,
    "title": "Geddes",
    "price": 745,
    "stock": 233,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
    "brand": "Gabapentin"
  }, {
    "id": 14,
    "title": "Armstead",
    "price": 5542,
    "stock": 139,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/231x100.png/5fa2dd/ffffff",
    "brand": "INDOMETHACIN"
  }, {
    "id": 15,
    "title": "Ziems",
    "price": 3648,
    "stock": 17,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/210x100.png/ff4444/ffffff",
    "brand": "Pepto-Bismol"
  }, {
    "id": 16,
    "title": "Churchman",
    "price": 5413,
    "stock": 65,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/246x100.png/dddddd/000000",
    "brand": "CORGARD"
  }, {
    "id": 17,
    "title": "McMickan",
    "price": 4454,
    "stock": 54,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/168x100.png/dddddd/000000",
    "brand": "Sunmark Phenolated Calamine"
  }, {
    "id": 18,
    "title": "Sawkins",
    "price": 1862,
    "stock": 45,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/128x100.png/cc0000/ffffff",
    "brand": "Molds, Rusts and Smuts, Mucor racemosus"
  }, {
    "id": 19,
    "title": "Isoldi",
    "price": 824,
    "stock": 298,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/106x100.png/ff4444/ffffff",
    "brand": "COUMADIN"
  }, {
    "id": 20,
    "title": "Alberts",
    "price": 470,
    "stock": 50,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/159x100.png/dddddd/000000",
    "brand": "Hand Sanitizer"
  }, {
    "id": 21,
    "title": "Thoresby",
    "price": 5429,
    "stock": 122,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/218x100.png/cc0000/ffffff",
    "brand": "Vertebra lumbalis 6"
  }, {
    "id": 22,
    "title": "Punch",
    "price": 7525,
    "stock": 113,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
    "brand": "Pollens - Trees, Tree Mix 11"
  }, {
    "id": 23,
    "title": "Ancliffe",
    "price": 7217,
    "stock": 276,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/241x100.png/cc0000/ffffff",
    "brand": "Alba Sunblock Natural Sport SPF 45"
  }, {
    "id": 24,
    "title": "McVanamy",
    "price": 1182,
    "stock": 76,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/125x100.png/cc0000/ffffff",
    "brand": "HAND SANITIZING"
  }, {
    "id": 25,
    "title": "Peeke-Vout",
    "price": 7334,
    "stock": 84,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/131x100.png/5fa2dd/ffffff",
    "brand": "LITHIUM CARBONATE"
  }, {
    "id": 26,
    "title": "Charpin",
    "price": 4212,
    "stock": 184,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/115x100.png/ff4444/ffffff",
    "brand": "Cumin"
  }, {
    "id": 27,
    "title": "Russ",
    "price": 8900,
    "stock": 101,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/195x100.png/cc0000/ffffff",
    "brand": "Medicated Apricot Scrub"
  }, {
    "id": 28,
    "title": "McReynolds",
    "price": 5633,
    "stock": 5,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/145x100.png/dddddd/000000",
    "brand": "Roccos Old School"
  }, {
    "id": 29,
    "title": "Leisk",
    "price": 526,
    "stock": 19,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/121x100.png/dddddd/000000",
    "brand": "2 in 1"
  }, {
    "id": 30,
    "title": "Younie",
    "price": 7475,
    "stock": 135,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/156x100.png/ff4444/ffffff",
    "brand": "Protection 50 Body"
  }, {
    "id": 31,
    "title": "Chewter",
    "price": 5840,
    "stock": 110,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/143x100.png/5fa2dd/ffffff",
    "brand": "anti nausea"
  }, {
    "id": 32,
    "title": "Mallall",
    "price": 9029,
    "stock": 233,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/175x100.png/ff4444/ffffff",
    "brand": "Methocarbamol"
  }, {
    "id": 33,
    "title": "McGarel",
    "price": 5439,
    "stock": 31,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/192x100.png/5fa2dd/ffffff",
    "brand": "Tork Advanced Antimicrobial"
  }, {
    "id": 34,
    "title": "Quibell",
    "price": 2432,
    "stock": 272,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/217x100.png/cc0000/ffffff",
    "brand": "Tea Tree Antiseptic"
  }, {
    "id": 35,
    "title": "Aers",
    "price": 3743,
    "stock": 291,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/136x100.png/cc0000/ffffff",
    "brand": "Methylprednisolone"
  }, {
    "id": 36,
    "title": "O'Neill",
    "price": 2726,
    "stock": 94,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
    "brand": "Reflux RXS"
  }, {
    "id": 37,
    "title": "MacConnulty",
    "price": 404,
    "stock": 9,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
    "brand": "FLUPHENAZINE HYDROCHLORIDE"
  }, {
    "id": 38,
    "title": "Jado",
    "price": 4007,
    "stock": 84,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/248x100.png/5fa2dd/ffffff",
    "brand": "Puncture Wounds Bites"
  }, {
    "id": 39,
    "title": "Larciere",
    "price": 6610,
    "stock": 183,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/144x100.png/dddddd/000000",
    "brand": "Perindopril Erbumine"
  }, {
    "id": 40,
    "title": "Gammill",
    "price": 3055,
    "stock": 209,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/142x100.png/cc0000/ffffff",
    "brand": "COCHLIOBOLUS SATIVUS"
  }, {
    "id": 41,
    "title": "Librey",
    "price": 3741,
    "stock": 34,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/113x100.png/dddddd/000000",
    "brand": "Levetiracetam"
  }, {
    "id": 42,
    "title": "Lennarde",
    "price": 9580,
    "stock": 111,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/205x100.png/cc0000/ffffff",
    "brand": "Acetylcysteine"
  }, {
    "id": 43,
    "title": "Noweak",
    "price": 4521,
    "stock": 43,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/221x100.png/dddddd/000000",
    "brand": "Piroxicam"
  }, {
    "id": 44,
    "title": "Richardsson",
    "price": 8647,
    "stock": 171,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/209x100.png/ff4444/ffffff",
    "brand": "TOTAL TIN"
  }, {
    "id": 45,
    "title": "Ilyas",
    "price": 3065,
    "stock": 62,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
    "brand": "Sensipar"
  }, {
    "id": 46,
    "title": "Whyard",
    "price": 2640,
    "stock": 291,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/129x100.png/ff4444/ffffff",
    "brand": "Rash Relief Antifungal"
  }, {
    "id": 47,
    "title": "Roggers",
    "price": 5105,
    "stock": 136,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/192x100.png/dddddd/000000",
    "brand": "Unblemish"
  }, {
    "id": 48,
    "title": "Surgeoner",
    "price": 1594,
    "stock": 255,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/209x100.png/cc0000/ffffff",
    "brand": "Pure Finish Mineral Tinted Moisturizer SPF 15 Fair"
  }, {
    "id": 49,
    "title": "Creamen",
    "price": 6457,
    "stock": 104,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/234x100.png/ff4444/ffffff",
    "brand": "Ciprofloxacin"
  }, {
    "id": 50,
    "title": "Henryson",
    "price": 2306,
    "stock": 171,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/211x100.png/ff4444/ffffff",
    "brand": "ULTRACET"
  }];

  const collectionRef = collection(DB, "products");

  /* for of */
  for (let item of items) {
    item.index = item.id;
    delete item.id;
    const docRef = await addDoc(collectionRef, item);
    console.log("Document created with ID", docRef.id);
  }
}