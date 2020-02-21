var cards: Array <{}> = [];

class Locations{
    name = "";
    city = "";
    zipCode = "";
    address = "";
    img = "";

    constructor(name, city, zipCode, address, img) {
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        cards.push(this);
        this.display();
    }

    display() {
        for( let i of cards) {
            var places =  `<div class="col-lg-2 col-md-5 col-sm-10 mb-3">
                               <div class="card">
                                 <img class="card-img-top d-block d-sm-none d-md-block" src="${this.img}" alt="Location image">
                                 <div class="card-body">
                                 <h4 class="card-title">${this.name}</h4>
                                 <p class="card-text">
                                 City : ${this.city}<br>
                                 Address : ${this.address}<br>
                                 Zip-Code : ${this.zipCode}<br>
                                 </p>
                                 </div>
                                 </div>
                                 </div>`;
        }

        document.getElementById("cardContainer").innerHTML += places ;
    }
}


class Restaurants extends Locations{
    
}









let CharlesChurch = new Locations("Karls Kirche", "Vienna", "1010", "Karlsplatz 1", "img/charles.jpg");
let GamlaStan = new Locations("Gamla Stan", "Stockholm", "103 10", "Södermalm 1", "img/gamlaStan.jpg");
let KewGarden = new Locations("Kew Gardens", "London", "TW9 3AE", "Kew, Richmond", "img/kewGarden.jpg");
let SagradaFamilia = new Locations("Sagrada Familia", "Barcelona", "C53F+FP", "Carrer de Mallorca 401", "img/sagrada.jpg");
