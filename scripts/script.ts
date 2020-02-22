var cardsL: Array <{}> = [];

class Locations{
    name = "";
    city = "";
    zipCode = "";
    address = "";
    img = "";

    constructor(name, city, zipCode, address, img){
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        cardsL.push(this);
        this.display();
    }

    display() {
        for( let i of cardsL){
            var places =  `<div class="col-lg-3 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch">
                               <div class="card">
                                 <img class="card-img-top d-block d-xs-none d-sm-none  d-md-block" src="${this.img}" alt="Location image">
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

        document.getElementById("locationCards").innerHTML += places ;
    }
}


var cardsR: Array <{}> = [];

class Restaurants extends Locations{
    phoneNumber = "";
    type = "";
    webAddress = "";

    constructor(name, city, zipCode, address, img, phoneNumber, type, webAddress){
        super(name, city, zipCode, address, img);
        this.phoneNumber = phoneNumber;
        this.type = type;
        this.webAddress = webAddress;
        cardsR.push(this);
        this.showR();
    }

    showR(){
        for( let i of cardsR){
            var  diners=  `<div class="col-lg-2 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch">
                               <div class="card">
                                 <img class="card-img-top d-block d-sm-none d-md-block" src="${this.img}" alt="Restaurant image">
                                 <div class="card-body">
                                 <h4 class="card-title">${this.name}</h4>
                                 <p class="card-text">
                                 City : ${this.city}<br>
                                 Address : ${this.address}<br>
                                 Zip-Code : ${this.zipCode}<br>
                                 Tel. : ${this.phoneNumber}<br>
                                 Type : ${this.type}<br>
                                 Website : ${this.webAddress}<br>
                                 </p>
                                 </div>
                                 </div>
                                 </div>`;
                                 console.table(this);
        }

        document.getElementById("restaurantCards").innerHTML += diners ;
    }
}






//Locations 
let CharlesChurch = new Locations("Karls Kirche", "Vienna", "1010", "Karlsplatz 1", "img/charles.jpg");
let GamlaStan = new Locations("Gamla Stan", "Stockholm", "103 10", "Södermalm 1", "img/gamlaStan.jpg");
let KewGarden = new Locations("Kew Gardens", "London", "TW9 3AE", "Kew, Richmond", "img/kewGarden.jpg");
let SagradaFamilia = new Locations("Sagrada Familia", "Barcelona", "C53F+FP", "Carrer de Mallorca 401", "img/sagrada.jpg");

//Restaurants
let SwingKitchen = new Restaurants("Swing Kitchen", "Vienna", "1040", "Operngasse 24", "img/swing.jpg", "0123456789", "FastFood/Vegan", "www.swingkitchen.com");
let Gastrologik = new Restaurants("Gastrologik", "Stockholm", "114 51", "14 Artillerigatan", "img/Gastrologik.jpg", "4686623060", "Swedish/Scandinavian", "www.gastrologik.se");
let TheRealGreek = new Restaurants("The Real Greek", "London", "W1F 8SJ", "50 Berwick Street", "img/realGreek.jpg", "442072876805", "Greek/Mediterranean", "www.therealgreek.com");
let ConGracia = new Restaurants("Con Gracia", "Barcelona", "08012", "Martinez de la Rosa 8", "img/congracia.jpg", "34932380201", "Spanish/Catalan", "www.congracia.es/es/inicio");