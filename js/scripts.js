//Business interface logic
function Products (prodname, pid, cost, shortdescription,longdescription,pic,numProducts) {
  this.pName= prodname;
  this.pID = pid
  this.price= cost;
  this.sdescription = shortdescription;
  this.description = longdescription;
  this.picture = pic;
  this.quantity = numProducts;

}

//Products
var p1 = new Products("Diamond water", 1, 200, "Smooth freshening water that cools your thirst.", "Smooth freshening water that cools your thirst. Made from water that is said to have fallen from the heavens","../img/img1.jpg", 10);

var p2 = new Products("Vilsa Water", 2, 250, "Water from the Vilsa hills...", "From the hills of Vilsa, filtered by the hills and nature itself","../img/img2.jpg", 10);

var p3 = new Products("Mineral Water", 3, 100,"Fresh water with enriching minerals.","Good old water, in a stylish bottle. Our most affordable product", "../img/img3.jpg", 10);

var p4 = new Products("Acqua", 4, 250, "Natural spring water.", "Natural spring water, unfilited and tasty. Taste nature", "../img/img4.jpg", 15);

var p5 = new Products("Protein Water", 5,300,  "Has protein supplements good for health.",
               "Created for gym bunnies, this will increase your gains 10fold","../img/img5.jpg", 15);

var p6 = new Products("Voss", 6, 300, "Voss water made of nature.", "Water from the famous Voss springs of Voss","../img/img6.jpg", 12);

var p7 = new Products("Sun Bum", 7, 250, "Can't go wrong with sun bum in sunny days.", "Energizing drink that increases photothensis","../img/img7.jpg", 20);

var p8 = new Products("Generosity",  8, 200, "Generosity water generous for training!", "Meant to be shared with friends! Increase training capabilities and team work sevenfold!", "../img/img8.jpg", 20);

var allproducts = {productID: [p1,p2,p3,p4,p5,p6,p7,p8]}



//user interface logic
$(document).ready(function() {

  allproducts.productID.forEach(function(product) {
     console.log(product.pName);
     console.log(product.price);
     console.log(product.sdescription);
   });


    });
