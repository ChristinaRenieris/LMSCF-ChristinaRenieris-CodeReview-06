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
                               <div class="card w-100">
                                 <img class="card-img-top d-none d-md-block  d-lg-block  d-xl-block" src="${this.img}" alt="Location image">
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
        this.displayR();
    }

    displayR(){
        for( let i of cardsR){
            var  diners=  `<div class="col-lg-3 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch">
                               <div class="card w-100">
                                 <img class="card-img-top d-none d-md-block  d-lg-block  d-xl-block" src="${this.img}" alt="Restaurant image">
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


var cardsE: Array <{}> = [];

class Events extends Locations{
    eventDate = "";
    eventTime = "";
    ticket = "";

    constructor(name, city, zipCode, address, img, eventDate, eventTime, ticket){
        super(name, city, zipCode, address, img);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticket = ticket;
        cardsE.push(this);
        this.displayE();
    }

    displayE(){
        for( let i of cardsR){
            var occasions =  `<div class="col-lg-3 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch">
                               <div class="card w-100">
                                 <img class="card-img-top d-none d-md-block  d-lg-block  d-xl-block" src="${this.img}" alt="Restaurant image">
                                 <div class="card-body">
                                 <h4 class="card-title">${this.name}</h4>
                                 <p class="card-text">
                                 City : ${this.city}<br>
                                 Address : ${this.address}<br>
                                 Zip-Code : ${this.zipCode}<br>
                                 Date : ${this.eventDate}<br>
                                 Time : ${this.eventTime}<br>
                                 Ticket : ${this.ticket} &euro;<br>
                                 </p>
                                 </div>
                                 </div>
                                 </div>`;
                                 console.table(this);
        }

        document.getElementById("eventCards").innerHTML += occasions ;
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

//Events

let PrincessNokia = new Events("Princess Nokia Live", "Vienna", "1030", "Baumgasse 80", "img/nokia.jpg", "5 March 2020", "19:00", "30");
let HouseOfRock = new Events("House of Rock", "Stockholm", "112 38", "Kungsgatan 29", "img/rock.jpg", "19 May 2020", "18:00", "100");
let Diving = new Events("Diving Championship", "London", "E20 2ST", "Olympic Park", "img/diving.jpg", "27-29 March 2020", "9:00", "15");
let Choir = new Events("Vienna Boys Choir", "Barcelona", "08002", "C/De St Pere 11", "img/choir.jpg", "22 February 2020", "20:00", "45");