var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cardsL = [];
var Locations = /** @class */ (function () {
    function Locations(name, city, zipCode, address, img) {
        this.name = "";
        this.city = "";
        this.zipCode = "";
        this.address = "";
        this.img = "";
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        cardsL.push(this);
        this.display();
    }
    Locations.prototype.display = function () {
        for (var _i = 0, cardsL_1 = cardsL; _i < cardsL_1.length; _i++) {
            var i = cardsL_1[_i];
            var places = "<div class=\"col-lg-3 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch\">\n                               <div class=\"card w-100\">\n                                 <img class=\"card-img-top d-none d-md-block  d-lg-block  d-xl-block\" src=\"" + this.img + "\" alt=\"Location image\">\n                                 <div class=\"card-body\">\n                                 <h4 class=\"card-title\">" + this.name + "</h4>\n                                 <p class=\"card-text\">\n                                 City : " + this.city + "<br>\n                                 Address : " + this.address + "<br>\n                                 Zip-Code : " + this.zipCode + "<br>\n                                 </p>\n                                 </div>\n                                 </div>\n                                 </div>";
        }
        document.getElementById("locationCards").innerHTML += places;
    };
    return Locations;
}());
var cardsR = [];
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zipCode, address, img, phoneNumber, type, webAddress) {
        var _this = _super.call(this, name, city, zipCode, address, img) || this;
        _this.phoneNumber = "";
        _this.type = "";
        _this.webAddress = "";
        _this.phoneNumber = phoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        cardsR.push(_this);
        _this.displayR();
        return _this;
    }
    Restaurants.prototype.displayR = function () {
        for (var _i = 0, cardsR_1 = cardsR; _i < cardsR_1.length; _i++) {
            var i = cardsR_1[_i];
            var diners = "<div class=\"col-lg-3 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch\">\n                               <div class=\"card w-100\">\n                                 <img class=\"card-img-top d-none d-md-block  d-lg-block  d-xl-block\" src=\"" + this.img + "\" alt=\"Restaurant image\">\n                                 <div class=\"card-body\">\n                                 <h4 class=\"card-title\">" + this.name + "</h4>\n                                 <p class=\"card-text\">\n                                 City : " + this.city + "<br>\n                                 Address : " + this.address + "<br>\n                                 Zip-Code : " + this.zipCode + "<br>\n                                 Tel. : " + this.phoneNumber + "<br>\n                                 Type : " + this.type + "<br>\n                                 Website : " + this.webAddress + "<br>\n                                 </p>\n                                 </div>\n                                 </div>\n                                 </div>";
            console.table(this);
        }
        document.getElementById("restaurantCards").innerHTML += diners;
    };
    return Restaurants;
}(Locations));
var cardsE = [];
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, img, eventDate, eventTime, ticket) {
        var _this = _super.call(this, name, city, zipCode, address, img) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.ticket = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticket = ticket;
        cardsE.push(_this);
        _this.displayE();
        return _this;
    }
    Events.prototype.displayE = function () {
        for (var _i = 0, cardsR_2 = cardsR; _i < cardsR_2.length; _i++) {
            var i = cardsR_2[_i];
            var occasions = "<div class=\"col-lg-3 col-md-5 col-sm-10 mb-3 d-flex alight-items-stretch\">\n                               <div class=\"card w-100\">\n                                 <img class=\"card-img-top d-none d-md-block  d-lg-block  d-xl-block\" src=\"" + this.img + "\" alt=\"Restaurant image\">\n                                 <div class=\"card-body\">\n                                 <h4 class=\"card-title\">" + this.name + "</h4>\n                                 <p class=\"card-text\">\n                                 City : " + this.city + "<br>\n                                 Address : " + this.address + "<br>\n                                 Zip-Code : " + this.zipCode + "<br>\n                                 Date : " + this.eventDate + "<br>\n                                 Time : " + this.eventTime + "<br>\n                                 Ticket : " + this.ticket + " &euro;<br>\n                                 </p>\n                                 </div>\n                                 </div>\n                                 </div>";
            console.table(this);
        }
        document.getElementById("eventCards").innerHTML += occasions;
    };
    return Events;
}(Locations));
//Locations 
var CharlesChurch = new Locations("Karls Kirche", "Vienna", "1010", "Karlsplatz 1", "img/charles.jpg");
var GamlaStan = new Locations("Gamla Stan", "Stockholm", "103 10", "Södermalm 1", "img/gamlaStan.jpg");
var KewGarden = new Locations("Kew Gardens", "London", "TW9 3AE", "Kew, Richmond", "img/kewGarden.jpg");
var SagradaFamilia = new Locations("Sagrada Familia", "Barcelona", "C53F+FP", "Carrer de Mallorca 401", "img/sagrada.jpg");
//Restaurants
var SwingKitchen = new Restaurants("Swing Kitchen", "Vienna", "1040", "Operngasse 24", "img/swing.jpg", "0123456789", "FastFood/Vegan", "www.swingkitchen.com");
var Gastrologik = new Restaurants("Gastrologik", "Stockholm", "114 51", "14 Artillerigatan", "img/Gastrologik.jpg", "4686623060", "Swedish/Scandinavian", "www.gastrologik.se");
var TheRealGreek = new Restaurants("The Real Greek", "London", "W1F 8SJ", "50 Berwick Street", "img/realGreek.jpg", "442072876805", "Greek/Mediterranean", "www.therealgreek.com");
var ConGracia = new Restaurants("Con Gracia", "Barcelona", "08012", "Martinez de la Rosa 8", "img/congracia.jpg", "34932380201", "Spanish/Catalan", "www.congracia.es/es/inicio");
//Events
var PrincessNokia = new Events("Princess Nokia Live", "Vienna", "1030", "Baumgasse 80", "img/nokia.jpg", "5 March 2020", "19:00", "30");
var HouseOfRock = new Events("House of Rock", "Stockholm", "112 38", "Kungsgatan 29", "img/rock.jpg", "19 May 2020", "18:00", "100");
var Diving = new Events("Diving Championship", "London", "E20 2ST", "Olympic Park", "img/diving.jpg", "27-29 March 2020", "9:00", "15");
var Choir = new Events("Vienna Boys Choir", "Barcelona", "08002", "C/De St Pere 11", "img/choir.jpg", "22 February 2020", "20:00", "45");
