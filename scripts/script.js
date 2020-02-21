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
var cards = [];
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
        cards.push(this);
        this.display();
    }
    Locations.prototype.display = function () {
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var i = cards_1[_i];
            var places = "<div class=\"col-lg-2 col-md-5 col-sm-10 mb-3\">\n                               <div class=\"card\">\n                                 <img class=\"card-img-top d-block d-sm-none d-md-block\" src=\"" + this.img + "\" alt=\"Location image\">\n                                 <div class=\"card-body\">\n                                 <h4 class=\"card-title\">" + this.name + "</h4>\n                                 <p class=\"card-text\">\n                                 City : " + this.city + "<br>\n                                 Address : " + this.address + "<br>\n                                 Zip-Code : " + this.zipCode + "<br>\n                                 </p>\n                                 </div>\n                                 </div>\n                                 </div>";
        }
        document.getElementById("cardContainer").innerHTML += places;
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Restaurants;
}(Locations));
var CharlesChurch = new Locations("Karls Kirche", "Vienna", "1010", "Karlsplatz 1", "img/charles.jpg");
var GamlaStan = new Locations("Gamla Stan", "Stockholm", "103 10", "Södermalm 1", "img/gamlaStan.jpg");
var KewGarden = new Locations("Kew Gardens", "London", "TW9 3AE", "Kew, Richmond", "img/kewGarden.jpg");
var SagradaFamilia = new Locations("Sagrada Familia", "Barcelona", "C53F+FP", "Carrer de Mallorca 401", "img/sagrada.jpg");
