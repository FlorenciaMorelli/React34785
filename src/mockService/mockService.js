/* -------------- BACK-END -------------- */
const itemsDB = [
{
    "id": 1,
    "title": "Lamar",
    "price": "$20063.57",
    "stock": 38,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/179x100.png/cc0000/ffffff",
    "brand": "Livepath"
    }, {
    "id": 2,
    "title": "Robillart",
    "price": "$11451.69",
    "stock": 47,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/215x100.png/dddddd/000000",
    "brand": "Vipe"
    }, {
    "id": 3,
    "title": "Baudic",
    "price": "$9171.57",
    "stock": 56,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/186x100.png/ff4444/ffffff",
    "brand": "Gabcube"
    }, {
    "id": 4,
    "title": "Cinelli",
    "price": "$11042.98",
    "stock": 51,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/225x100.png/5fa2dd/ffffff",
    "brand": "Quimm"
    }, {
    "id": 5,
    "title": "McWhirter",
    "price": "$4884.35",
    "stock": 124,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/175x100.png/dddddd/000000",
    "brand": "Riffpath"
    }, {
    "id": 6,
    "title": "Jillis",
    "price": "$8799.54",
    "stock": 115,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/237x100.png/ff4444/ffffff",
    "brand": "Rhybox"
    }, {
    "id": 7,
    "title": "Belliss",
    "price": "$12615.83",
    "stock": 49,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
    "brand": "Eidel"
    }, {
    "id": 8,
    "title": "Nouch",
    "price": "$21331.81",
    "stock": 30,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/247x100.png/ff4444/ffffff",
    "brand": "Skajo"
    }, {
    "id": 9,
    "title": "Norval",
    "price": "$22985.65",
    "stock": 127,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/173x100.png/dddddd/000000",
    "brand": "Cogidoo"
    }, {
    "id": 10,
    "title": "Lace",
    "price": "$19983.42",
    "stock": 121,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/172x100.png/ff4444/ffffff",
    "brand": "Linklinks"
    }, {
    "id": 11,
    "title": "Falshaw",
    "price": "$3028.54",
    "stock": 49,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/235x100.png/cc0000/ffffff",
    "brand": "Feedbug"
    }, {
    "id": 12,
    "title": "Hearns",
    "price": "$10697.55",
    "stock": 112,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
    "brand": "Podcat"
    }, {
    "id": 13,
    "title": "Swaysland",
    "price": "$14716.39",
    "stock": 117,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/197x100.png/dddddd/000000",
    "brand": "Edgeblab"
    }, {
    "id": 14,
    "title": "Loughhead",
    "price": "$5196.21",
    "stock": 55,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/215x100.png/ff4444/ffffff",
    "brand": "Browsebug"
    }, {
    "id": 15,
    "title": "Ivison",
    "price": "$1019.52",
    "stock": 112,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/201x100.png/cc0000/ffffff",
    "brand": "Livetube"
    }, {
    "id": 16,
    "title": "Cohrs",
    "price": "$8185.96",
    "stock": 21,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
    "brand": "Topicware"
    }, {
    "id": 17,
    "title": "McIllroy",
    "price": "$14356.59",
    "stock": 43,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/177x100.png/cc0000/ffffff",
    "brand": "Yabox"
    }, {
    "id": 18,
    "title": "Vondruska",
    "price": "$3957.10",
    "stock": 4,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
    "brand": "Blognation"
    }, {
    "id": 19,
    "title": "Pittendreigh",
    "price": "$18148.54",
    "stock": 82,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/156x100.png/dddddd/000000",
    "brand": "Oyoloo"
    }, {
    "id": 20,
    "title": "Lydford",
    "price": "$14.36",
    "stock": 127,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/167x100.png/ff4444/ffffff",
    "brand": "Wordware"
    }, {
    "id": 21,
    "title": "Serman",
    "price": "$13015.57",
    "stock": 31,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/216x100.png/ff4444/ffffff",
    "brand": "Gabspot"
    }, {
    "id": 22,
    "title": "Wateridge",
    "price": "$19219.81",
    "stock": 20,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/210x100.png/5fa2dd/ffffff",
    "brand": "Zoomcast"
    }, {
    "id": 23,
    "title": "Clout",
    "price": "$14946.11",
    "stock": 83,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/170x100.png/ff4444/ffffff",
    "brand": "Muxo"
    }, {
    "id": 24,
    "title": "Ashness",
    "price": "$11679.60",
    "stock": 5,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/180x100.png/dddddd/000000",
    "brand": "Jabbersphere"
    }, {
    "id": 25,
    "title": "Adnett",
    "price": "$1831.35",
    "stock": 87,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/164x100.png/cc0000/ffffff",
    "brand": "Jetwire"
    }, {
    "id": 26,
    "title": "Ridsdell",
    "price": "$1503.76",
    "stock": 112,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/161x100.png/dddddd/000000",
    "brand": "Skinte"
    }, {
    "id": 27,
    "title": "Woodwin",
    "price": "$14182.88",
    "stock": 107,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/191x100.png/dddddd/000000",
    "brand": "Livefish"
    }, {
    "id": 28,
    "title": "Dilliway",
    "price": "$9440.11",
    "stock": 113,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/184x100.png/5fa2dd/ffffff",
    "brand": "Zoomcast"
    }, {
    "id": 29,
    "title": "Boraston",
    "price": "$15880.79",
    "stock": 106,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/184x100.png/cc0000/ffffff",
    "brand": "Cogibox"
    }, {
    "id": 30,
    "title": "Antoniak",
    "price": "$8520.11",
    "stock": 31,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/162x100.png/dddddd/000000",
    "brand": "Zoozzy"
    }, {
    "id": 31,
    "title": "Jeacocke",
    "price": "$9977.87",
    "stock": 73,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/229x100.png/cc0000/ffffff",
    "brand": "Skibox"
    }, {
    "id": 32,
    "title": "Brommage",
    "price": "$4712.92",
    "stock": 7,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/155x100.png/cc0000/ffffff",
    "brand": "Tavu"
    }, {
    "id": 33,
    "title": "Mounfield",
    "price": "$5567.14",
    "stock": 5,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
    "brand": "Meevee"
    }, {
    "id": 34,
    "title": "Spatarul",
    "price": "$9588.00",
    "stock": 36,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/213x100.png/ff4444/ffffff",
    "brand": "Janyx"
    }, {
    "id": 35,
    "title": "Dunn",
    "price": "$13068.64",
    "stock": 30,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/169x100.png/cc0000/ffffff",
    "brand": "Edgeify"
    }, {
    "id": 36,
    "title": "Josling",
    "price": "$22416.52",
    "stock": 124,
    "category": "Running",
    "thumbnail": "http://dummyimage.com/191x100.png/5fa2dd/ffffff",
    "brand": "Dabjam"
    }, {
    "id": 37,
    "title": "Pyvis",
    "price": "$22191.31",
    "stock": 14,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/168x100.png/dddddd/000000",
    "brand": "Dabfeed"
    }, {
    "id": 38,
    "title": "Petrolli",
    "price": "$15206.35",
    "stock": 52,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/168x100.png/cc0000/ffffff",
    "brand": "Tambee"
    }, {
    "id": 39,
    "title": "Matura",
    "price": "$22478.67",
    "stock": 29,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/247x100.png/cc0000/ffffff",
    "brand": "Tanoodle"
    }, {
    "id": 40,
    "title": "Crehan",
    "price": "$18550.83",
    "stock": 120,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
    "brand": "Photolist"
    }, {
    "id": 41,
    "title": "Yglesias",
    "price": "$18323.14",
    "stock": 84,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/225x100.png/5fa2dd/ffffff",
    "brand": "Skinte"
    }, {
    "id": 42,
    "title": "Eim",
    "price": "$19362.94",
    "stock": 108,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/204x100.png/dddddd/000000",
    "brand": "Avamba"
    }, {
    "id": 43,
    "title": "Vondruska",
    "price": "$21201.34",
    "stock": 83,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
    "brand": "Wikido"
    }, {
    "id": 44,
    "title": "Heindrick",
    "price": "$21713.20",
    "stock": 12,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
    "brand": "Centidel"
    }, {
    "id": 45,
    "title": "Nockolds",
    "price": "$9978.77",
    "stock": 37,
    "category": "Tenis",
    "thumbnail": "http://dummyimage.com/150x100.png/ff4444/ffffff",
    "brand": "Gabcube"
    }, {
    "id": 46,
    "title": "Brandsen",
    "price": "$21534.69",
    "stock": 112,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/214x100.png/cc0000/ffffff",
    "brand": "Tanoodle"
    }, {
    "id": 47,
    "title": "Buney",
    "price": "$205.15",
    "stock": 80,
    "category": "Urbanas",
    "thumbnail": "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
    "brand": "Jabberbean"
    }, {
    "id": 48,
    "title": "Dimond",
    "price": "$19776.83",
    "stock": 31,
    "category": "Training",
    "thumbnail": "http://dummyimage.com/168x100.png/ff4444/ffffff",
    "brand": "Mybuzz"
    }, {
    "id": 49,
    "title": "Southam",
    "price": "$20129.74",
    "stock": 32,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/220x100.png/cc0000/ffffff",
    "brand": "Minyx"
    }, {
    "id": 50,
    "title": "Quilkin",
    "price": "$1393.28",
    "stock": 21,
    "category": "Ojotas",
    "thumbnail": "http://dummyimage.com/154x100.png/5fa2dd/ffffff",
    "brand": "Yacero"
    }
];  

export default function getItemsFromAPI() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(itemsDB);
    }, 500);
});
}

export function getSingleItemFromAPI(idParams) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    let itemRequested = itemsDB.find((item) => item.id === Number(idParams));

    if (itemRequested) {
        resolve(itemRequested);
    } else {
        reject(new Error("El item no existe."));
    }
    }, 500);
});
}

export function getItemsFromAPIByCategory(categoryid) {
return new Promise((resolve) => {
    setTimeout(() => {
    let itemsRequested = itemsDB.filter(
        (item) => item.category === categoryid
    );
    resolve(itemsRequested);
    }, 500);
});
}