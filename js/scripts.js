//Business interface logic
/*
function Products (pID, price, sdescription,description,pic,noProducs) {
  this.ProductID= pID;
  this.Cost= price;
  this.shortDescription = sdescription;
  this.longDescription = description;
  this.picture = pic;
  this.quantity = noProducts;

}
*/

//Products
var p1 = {pName: "Diamond water", pID: 1, price: 200,sdescription: "Smooth freshening water that cools your thirst.",description: "Smooth freshening water that cools your thirst. Made from water that is said to have fallen from the heavens",pic: "../img/img1.jpg", noProducts: 10};

var p2 = {pName: "Vilsa Water", pID: 2, price: 250,sdescription: "Water from the Vilsa hills...", description: "From the hills of Vilsa, filtered by the hills and nature itself",pic: "../img/img2.jpg", noProducts: 10};

var p3 = {pName: "Mineral Water", pID: 3, price: 100,sdescription: "Fresh water with enriching minerals.",description: "Good old water, in a stylish bottle. Our most affordable product",pic: "../img/img3.jpg", noProducts: 10};

var p4 = {pName: "Acqua", pID: 4, price: 250, sdescription: "Natural spring water.", description: "Natural spring water, unfilited and tasty. Taste nature",pic: "../img/img4.jpg", noProducts: 15};

var p5 = {pName: "Protein Water", pID: 5,price: 300, sdescription: "Has protein supplements good for health.",
              description: "Created for gym bunnies, this will increase your gains 10fold",pic: "../img/img5.jpg", noProducts: 15};

var p6 = {pName: "Voss", pID: 6,price: 300, sdescription: "Voss water made of nature.", description: "Water from the famous Voss springs of Voss",pic: "../img/img6.jpg", noProducts: 12};

var p7 = {pName: "Sun Bum", pID: 7,price: 250, sdescription: "Can't go wrong with sun bum in sunny days.", description: "Energizing drink that increases photothensis",pic: "../img/img7.jpg", noProducts: 20};

var p8 = {pName: "Generosity", pID: 8, price: 200, sdescription: "Generosity water generous for training!", description: "Meant to be shared with friends! Increase training capabilities and team work sevenfold!",pic: "../img/img8.jpg", noProducts: 20};

var products = {productID: [p1,p2,p3,p4,p5,p6,p7,p8]}

//user interface logic
$(document).ready(function() {

    products.productID.forEach(function(product) {
      console.log("lets go to " + product.pName);
      console.log("lets go to " + product.price);
      console.log("lets go to " + product.sdescription);
    });


    });
