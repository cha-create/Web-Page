let itemsInCart = 0;
let eggsInCart = 0;
let baconInCart = 0;
let baconCost = 5.00;
let eggCost = 8.00;
let taxPercent = 6.25 / 100;

let api_url = "https://api.wheretheiss.at/v1/satellites/25544";


async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById('lat').innerHTML = "Latitude: " + data.latitude;
    document.getElementById('lon').innerHTML = "Longitude: " + data.longitude;
}

async function getCat() {
    let response = await fetch("http://shibe.online/api/cats");
    let data = await response.json();
    document.getElementById('image').src = data;
    console.log(data);

}



setInterval(() => {
    getISS();
}, 1000);


document.getElementById("eggCartObject").style.display = "none";
document.getElementById("baconCartObject").style.display = "none";



function fetchText() {
    fetch("sample.txt")
        .then(response => {
            return response.text();
        })
        .then(text => {
            document.getElementById("retreivedText").innerHTML = text;
        })
}

function addEgg() {
    itemsInCart += 1;
    eggsInCart += 1;
    console.log("Eggs: " + eggsInCart);
}


function updateCart() {
    if (eggsInCart > 0) {
        document.getElementById("eggCartObject").style.display = "block";
        document.getElementById("eggCartAmount").innerHTML = "x" + eggsInCart;
    }
    if (baconInCart > 0) {
        document.getElementById("baconCartObject").style.display = "block";
        document.getElementById("baconCartAmount").innerHTML = "x" + baconInCart;
    }
    let subTotal = (eggsInCart * eggCost) + (baconInCart * baconCost);
    document.getElementById("subTotalCart").innerHTML = "Subtotal: $" + subTotal + ".00";
    let tax = subTotal / taxPercent;
    document.getElementById("taxCart").innerHTML = "Tax: $" + tax;
    let total = subTotal + tax;
    document.getElementById("totalCart").innerHTML = "Total: $" + total;
    console.log("Cart Updated");
    console.log(tax);

}


function addBacon() {
    itemsInCart += 1;
    baconInCart += 1;
    console.log("Bacon: " + baconInCart);
}

