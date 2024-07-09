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
    const docRef = doc(DB, "prod", id);
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
  catch (error) {
    throw error;
  }
}

// async/await -> try/catch
export async function getItemsFromAPI() {
  try {
    // 1. Necesito conectarme a la colección de "productos" con "collection"
    const collectionProducts = collection(DB, "prod");

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
  const productsRef = collection(DB, "prod");
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
  const collectionProductsRef = collection(DB, "prod");
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
  const items = [
    {
      "id": 1,
      "title": "Nike Metcon 9 Workout Shoes",
      "price": 14999,
      "stock": 20,
      "category": "Training",
      "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef1dafdd-37cc-4a75-8778-e55cea1185e8/metcon-9-workout-shoes-ndTxtM.png",
      "brand": "Nike"
    },
    {
      "id": 2,
      "title": "Adidas ZX 1K Boost Shoes",
      "price": 11999,
      "stock": 25,
      "category": "Running",
      "thumbnail": "https://www.tobys.com/cdn/shop/products/ssph.zone-1664244680-DA8570-001_a.jpg?v=1664245217",
      "brand": "Adidas"
    },
    {
      "id": 3,
      "title": "Converse Chuck Taylor All Star",
      "price": 6999,
      "stock": 30,
      "category": "Urbanas",
      "thumbnail": "https://images.journeys.com/images/products/1_4386_FS.JPG",
      "brand": "Converse"
    },
    {
      "id": 4,
      "title": "Puma Ralph Sampson Mid",
      "price": 8999,
      "stock": 25,
      "category": "Urbanas",
      "thumbnail": "https://hypepoint.ca/cdn/shop/files/adidas-Samba-OG-Black-White-Gum-GS-Product_d81c2aff-5d85-4a4d-bf63-2da7ffb4c3a5.webp?v=1718045988&width=1400",
      "brand": "Puma"
    },
    {
      "id": 5,
      "title": "Vans Old Skool",
      "price": 7999,
      "stock": 30,
      "category": "Urbanas",
      "thumbnail": "https://www.vans.co.nz/media/catalog/product/v/n/vn-0w9t6bt_blktrwht_01.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
      "brand": "Vans"
    },
    {
      "id": 6,
      "title": "Golden Goose Super Star",
      "price": 15999,
      "stock": 15,
      "category": "Urbanas",
      "thumbnail": "https://images.stockx.com/360/Golden-Goose-Super-Star-Black-White-Leather-W/Images/Golden-Goose-Super-Star-Black-White-Leather-W/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1664432592&h=320&q=60",
      "brand": "Golden Goose"
    },
    {
      "id": 7,
      "title": "New Balance Fresh Foam X 860v12",
      "price": 12999,
      "stock": 20,
      "category": "Tenis",
      "thumbnail": "https://d2ob0iztsaxy5v.cloudfront.net/product/196366/1963667220_zm.jpg",
      "brand": "New Balance"
    },
    {
      "id": 8,
      "title": "Asics GEL-Kayano 28",
      "price": 13999,
      "stock": 15,
      "category": "Tenis",
      "thumbnail": "https://static.ftshp.digital/img/p/6/7/4/9/7/1/674971-full_product.jpg",
      "brand": "Asics"
    },
    {
      "id": 9,
      "title": "Nike Air Zoom Pegasus 38",
      "price": 11999,
      "stock": 25,
      "category": "Tenis",
      "thumbnail": "https://i5.walmartimages.com/asr/bac97f28-9d8b-4fcb-a874-139b3b5b09a7_1.2db490eb7338563d23612b593d5b6c76.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "brand": "Nike"
    },
    {
      "id": 10,
      "title": "Havaianas Top Mix",
      "price": 2999,
      "stock": 50,
      "category": "Ojotas",
      "thumbnail": "https://rukminim2.flixcart.com/image/850/1000/kcz4rrk0/slipper-flip-flop/g/m/1/9-su-wt-blk-pt-deny-brown-black-white-original-imaftz9pasqrztwc.jpeg?q=20&crop=false",
      "brand": "Havaianas"
    },
    {
      "id": 11,
      "title": "Off-White Black Flip Flops",
      "price": 4999,
      "stock": 40,
      "category": "Ojotas",
      "thumbnail": "https://cdn-images.farfetch-contents.com/off-white-black-flip-flops_14683259_23646508_1000.jpg",
      "brand": "Off-White"
    },
    {
      "id": 12,
      "title": "Crocs Classic Clog",
      "price": 3999,
      "stock": 30,
      "category": "Ojotas",
      "thumbnail": "https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/68/68/726/6868726_00_W1200_H1565.jpg",
      "brand": "Crocs"
    },
    {
      "id": 13,
      "title": "Birkenstock Arizona EVA",
      "price": 6999,
      "stock": 20,
      "category": "Ojotas",
      "thumbnail": "https://d2ob0iztsaxy5v.cloudfront.net/product/330296/3302967060m1_zm.jpg",
      "brand": "Birkenstock"
    },
    {
      "id": 14,
      "title": "Nike Metcon 9 Workout Shoes - Grey",
      "price": 14999,
      "stock": 20,
      "category": "Training",
      "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef1dafdd-37cc-4a75-8778-e55cea1185e8/metcon-9-workout-shoes-ndTxtM.png",
      "brand": "Nike"
    },
    {
      "id": 15,
      "title": "Adidas ZX 1K Boost Shoes - Black",
      "price": 11999,
      "stock": 25,
      "category": "Running",
      "thumbnail": "https://www.tobys.com/cdn/shop/products/ssph.zone-1664244680-DA8570-001_a.jpg?v=1664245217",
      "brand": "Adidas"
    },
    {
      "id": 16,
      "title": "Converse Chuck Taylor All Star - Red",
      "price": 6999,
      "stock": 30,
      "category": "Urbanas",
      "thumbnail": "https://images.journeys.com/images/products/1_4386_FS.JPG",
      "brand": "Converse"
    },
    {
      "id": 17,
      "title": "Puma Ralph Sampson Mid - White",
      "price": 8999,
      "stock": 25,
      "category": "Urbanas",
      "thumbnail": "https://hypepoint.ca/cdn/shop/files/adidas-Samba-OG-Black-White-Gum-GS-Product_d81c2aff-5d85-4a4d-bf63-2da7ffb4c3a5.webp?v=1718045988&width=1400",
      "brand": "Puma"
    },
    {
      "id": 18,
      "title": "Vans Old Skool - Black",
      "price": 7999,
      "stock": 30,
      "category": "Urbanas",
      "thumbnail": "https://www.vans.co.nz/media/catalog/product/v/n/vn-0w9t6bt_blktrwht_01.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
      "brand": "Vans"
    },
    {
      "id": 19,
      "title": "Golden Goose Super Star - White",
      "price": 15999,
      "stock": 15,
      "category": "Urbanas",
      "thumbnail": "https://images.stockx.com/360/Golden-Goose-Super-Star-Black-White-Leather-W/Images/Golden-Goose-Super-Star-Black-White-Leather-W/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1664432592&h=320&q=60",
      "brand": "Golden Goose"
    },
    {
      "id": 20,
      "title": "New Balance Fresh Foam X 860v12 - Grey",
      "price": 12999,
      "stock": 20,
      "category": "Tenis",
      "thumbnail": "https://d2ob0iztsaxy5v.cloudfront.net/product/196366/1963667220_zm.jpg",
      "brand": "New Balance"
    },
    {
      "id": 21,
      "title": "Asics GEL-Kayano 28 - Blue",
      "price": 13999,
      "stock": 15,
      "category": "Tenis",
      "thumbnail": "https://static.ftshp.digital/img/p/6/7/4/9/7/1/674971-full_product.jpg",
      "brand": "Asics"
    },
    {
      "id": 22,
      "title": "Nike Air Zoom Pegasus 38 - Black",
      "price": 11999,
      "stock": 25,
      "category": "Tenis",
      "thumbnail": "https://i5.walmartimages.com/asr/bac97f28-9d8b-4fcb-a874-139b3b5b09a7_1.2db490eb7338563d23612b593d5b6c76.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "brand": "Nike"
    },
    {
      "id": 23,
      "title": "Havaianas Top Mix - Black",
      "price": 2999,
      "stock": 50,
      "category": "Ojotas",
      "thumbnail": "https://rukminim2.flixcart.com/image/850/1000/kcz4rrk0/slipper-flip-flop/g/m/1/9-su-wt-blk-pt-deny-brown-black-white-original-imaftz9pasqrztwc.jpeg?q=20&crop=false",
      "brand": "Havaianas"
    },
    {
      "id": 24,
      "title": "Off-White Black Flip Flops",
      "price": 4999,
      "stock": 40,
      "category": "Ojotas",
      "thumbnail": "https://cdn-images.farfetch-contents.com/off-white-black-flip-flops_14683259_23646508_1000.jpg",
      "brand": "Off-White"
    },
    {
      "id": 25,
      "title": "Crocs Classic Clog - Blue",
      "price": 3999,
      "stock": 30,
      "category": "Ojotas",
      "thumbnail": "https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/68/68/726/6868726_00_W1200_H1565.jpg",
      "brand": "Crocs"
    },
    {
      "id": 26,
      "title": "Birkenstock Arizona EVA - Black",
      "price": 6999,
      "stock": 20,
      "category": "Ojotas",
      "thumbnail": "https://d2ob0iztsaxy5v.cloudfront.net/product/330296/3302967060m1_zm.jpg",
      "brand": "Birkenstock"
    },
    {
      "id": 27,
      "title": "Nike Metcon 9 Workout Shoes - Black",
      "price": 14999,
      "stock": 20,
      "category": "Training",
      "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef1dafdd-37cc-4a75-8778-e55cea1185e8/metcon-9-workout-shoes-ndTxtM.png",
      "brand": "Nike"
    },
    {
      "id": 28,
      "title": "Adidas ZX 1K Boost Shoes - White",
      "price": 11999,
      "stock": 25,
      "category": "Running",
      "thumbnail": "https://www.tobys.com/cdn/shop/products/ssph.zone-1664244680-DA8570-001_a.jpg?v=1664245217",
      "brand": "Adidas"
    },
    {
      "id": 29,
      "title": "Converse Chuck Taylor All Star - Black",
      "price": 6999,
      "stock": 30,
      "category": "Urbanas",
      "thumbnail": "https://images.journeys.com/images/products/1_4386_FS.JPG",
      "brand": "Converse"
    },
    {
      "id": 30,
      "title": "Puma Ralph Sampson Mid - Blue",
      "price": 8999,
      "stock": 25,
      "category": "Urbanas",
      "thumbnail": "https://hypepoint.ca/cdn/shop/files/adidas-Samba-OG-Black-White-Gum-GS-Product_d81c2aff-5d85-4a4d-bf63-2da7ffb4c3a5.webp?v=1718045988&width=1400",
      "brand": "Puma"
    },
    {
      "id": 31,
      "title": "Vans Old Skool - Red",
      "price": 7999,
      "stock": 30,
      "category": "Urbanas",
      "thumbnail": "https://www.vans.co.nz/media/catalog/product/v/n/vn-0w9t6bt_blktrwht_01.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
      "brand": "Vans"
    },
    {
      "id": 32,
      "title": "Golden Goose Super Star - Black",
      "price": 15999,
      "stock": 15,
      "category": "Urbanas",
      "thumbnail": "https://images.stockx.com/360/Golden-Goose-Super-Star-Black-White-Leather-W/Images/Golden-Goose-Super-Star-Black-White-Leather-W/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1664432592&h=320&q=60",
      "brand": "Golden Goose"
    },
    {
      "id": 33,
      "title": "New Balance Fresh Foam X 860v12 - Black",
      "price": 12999,
      "stock": 20,
      "category": "Tenis",
      "thumbnail": "https://d2ob0iztsaxy5v.cloudfront.net/product/196366/1963667220_zm.jpg",
      "brand": "New Balance"
    },
    {
      "id": 34,
      "title": "Asics GEL-Kayano 28 - White",
      "price": 13999,
      "stock": 15,
      "category": "Tenis",
      "thumbnail": "https://static.ftshp.digital/img/p/6/7/4/9/7/1/674971-full_product.jpg",
      "brand": "Asics"
    },
    {
      "id": 35,
      "title": "Nike Air Zoom Pegasus 38 - White",
      "price": 11999,
      "stock": 25,
      "category": "Tenis",
      "thumbnail": "https://i5.walmartimages.com/asr/bac97f28-9d8b-4fcb-a874-139b3b5b09a7_1.2db490eb7338563d23612b593d5b6c76.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "brand": "Nike"
    },
    {
      "id": 36,
      "title": "Havaianas Top Mix - Blue",
      "price": 2999,
      "stock": 50,
      "category": "Ojotas",
      "thumbnail": "https://rukminim2.flixcart.com/image/850/1000/kcz4rrk0/slipper-flip-flop/g/m/1/9-su-wt-blk-pt-deny-brown-black-white-original-imaftz9pasqrztwc.jpeg?q=20&crop=false",
      "brand": "Havaianas"
    },
    {
      "id": 37,
      "title": "Off-White White Flip Flops",
      "price": 4999,
      "stock": 40,
      "category": "Ojotas",
      "thumbnail": "https://cdn-images.farfetch-contents.com/off-white-black-flip-flops_14683259_23646508_1000.jpg",
      "brand": "Off-White"
    },
    {
      "id": 38,
      "title": "Crocs Classic Clog - Black",
      "price": 3999,
      "stock": 30,
      "category": "Ojotas",
      "thumbnail": "https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/68/68/726/6868726_00_W1200_H1565.jpg",
      "brand": "Crocs"
    },
    {
      "id": 39,
      "title": "Birkenstock Arizona EVA - White",
      "price": 6999,
      "stock": 20,
      "category": "Ojotas",
      "thumbnail": "https://d2ob0iztsaxy5v.cloudfront.net/product/330296/3302967060m1_zm.jpg",
      "brand": "Birkenstock"
    },
    {
      "id": 40,
      "title": "Nike Metcon 9 Workout Shoes - White",
      "price": 14999,
      "stock": 20,
      "category": "Training",
      "thumbnail": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef1dafdd-37cc-4a75-8778-e55cea1185e8/metcon-9-workout-shoes-ndTxtM.png",
      "brand": "Nike"
    }
  ];


  const collectionRef = collection(DB, "prod");

  /* for of */
  for (let item of items) {
    item.index = item.id;
    delete item.id;
    const docRef = await addDoc(collectionRef, item);
    console.log("Document created with ID", docRef.id);
  }
}