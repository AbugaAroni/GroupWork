//Business interface logic
//shopping cart
function ShoppingCart (productID, name, tprice, numordered) {
  this.orders = allorders;
  this.totalprice = tprice;
  this.totalordered = numordered;
}

var allorders = {productID: []};

//products and product objects
{ //products constructor
function Products (prodname, pid, cost, shortdescription,longdescription,pic,numProducts) {
  this.pName= prodname;
  this.pID = pid
  this.price= cost;
  this.sdescription = shortdescription;
  this.description = longdescription;
  this.picture = pic;
  this.quantity = numProducts;

}

//Product objects

var p1 = new Products("Diamond water", "p1", 200, "Smooth freshening water that cools your thirst.", "Smooth freshening water that cools your thirst. Made from water that is said to have fallen from the heavens","../img/img1.jpg", 10);

var p2 = new Products("Vilsa Water", "p2", 250, "Water from the Vilsa hills...", "From the hills of Vilsa, filtered by the hills and nature itself","../img/img2.jpg", 10);

var p3 = new Products("Mineral Water", "p3", 100,"Fresh water with enriching minerals.","Good old water, in a stylish bottle. Our most affordable product", "../img/img3.jpg", 10);

var p4 = new Products("Acqua", "p4", 250, "Natural spring water.", "Natural spring water, unfilited and tasty. Taste nature", "../img/img4.jpg", 15);

var p5 = new Products("Protein Water", "p5",300,  "Has protein supplements good for health.",
               "Created for gym bunnies, this will increase your gains 10fold","../img/img5.jpg", 15);

var p6 = new Products("Voss", "p6", 300, "Voss water made of nature.", "Water from the famous Voss springs of Voss","../img/img6.jpg", 12);

var p7 = new Products("Sun Bum", "p7", 250, "Can't go wrong with sun bum in sunny days.", "Energizing drink that increases photothensis","../img/img7.jpg", 20);

var p8 = new Products("Generosity", "p8", 200, "Generosity water generous for training!", "Meant to be shared with friends! Increase training capabilities and team work sevenfold!", "../img/img8.jpg", 20);

var allproducts = {productID: [p1,p2,p3,p4,p5,p6,p7,p8]}

}

//var to capture which product user wants to viewp
var iWanttoview =window.name;

//user interface logic
$(document).ready(function() {


//for each loop to display each product
   allproducts.productID.forEach(function(product) {
//#display shows which div to put the following code into.
    $("#productsdisplay").append('<div class="column">' +
              '<div class="card"style="width: 18rem;">'+
                     '<img class="card-img-top" src="'+ product.picture + '"alt="Card image '+ product.pName + '">'+
                     '<div class="card-body">' +
                         '<h5 class="card-title">'+ product.pName + '</h5>' +
                         '<p>'+ product.price + ' ksh</p>' +
                         '<p class="card-text">' + product.sdescription + '</p>'+
                     '</div>' +
                     '<div class="card-footer">' +
                        '<a href="#" id="'+ product.pID +'-btn"  class="btn btn-primary">Select</a>'+
                     '</div>'+
                 '</div>'+
             '</div>'
      );

    });

//click listeners for all the buttons
  $("#p1-btn").click( function(event) {
       event.preventDefault();
       window.name="p1";
      location.href='productdetailspage.html';

      });
  $("#p2-btn").click( function(event) {
           event.preventDefault();
           window.name="p2";
          location.href='productdetailspage.html';
          });
  $("#p3-btn").click( function(event) {
           event.preventDefault();
           window.name="p3";
          location.href='productdetailspage.html';
          });
  $("#p4-btn").click( function(event) {
           event.preventDefault();
           window.name="p4";
          location.href='productdetailspage.html';
          });
  $("#p5-btn").click( function(event) {
           event.preventDefault();
           window.name="p5";
          location.href='productdetailspage.html';
          });
  $("#p6-btn").click( function(event) {
           event.preventDefault();
           window.name="p6";
          location.href='productdetailspage.html';
          });
  $("#p7-btn").click( function(event) {
           event.preventDefault();
           window.name="p7";
          location.href='productdetailspage.html';
          });
  $("#p8-btn").click( function(event) {
          event.preventDefault();
          window.name="p8";
          location.href='productdetailspage.html';
                  });

//will display given product name
    if(window.name==="p1") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p1.Name +'-'+ p1.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p1.picture + '"alt="Card image '+ p1.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p1.pName + '</h5>' +
                              '<p>'+ p1.price + ' ksh</p>' +
                              '<p class="card-text">' + p1.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
              }
        else if(window.name==="p2") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p2.pName +'-'+ p2.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p2.picture + '"alt="Card image '+ p2.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p2.pName + '</h5>' +
                              '<p>'+ p2.price + ' ksh</p>' +
                              '<p class="card-text">' + p2.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }
        else if(window.name==="p3") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p3.pName +'-'+ p3.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p3.picture + '"alt="Card image '+ p3.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p3.pName + '</h5>' +
                              '<p>'+ p3.price + ' ksh</p>' +
                              '<p class="card-text">' + p3.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }
        else if(window.name==="p4") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p4.pName +'-'+ p4.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p4.picture + '"alt="Card image '+ p4.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p4.pName + '</h5>' +
                              '<p>'+ p4.price + ' ksh</p>' +
                              '<p class="card-text">' + p4.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }
        else if(window.name==="p5") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p5.pName +'-'+ p5.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p5.picture + '"alt="Card image '+ p5.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p5.pName + '</h5>' +
                              '<p>'+ p5.price + ' ksh</p>' +
                              '<p class="card-text">' + p5.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }
        else if(window.name==="p6") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p6.pName +'-'+ p6.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p6.picture + '"alt="Card image '+ p6.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p6.pName + '</h5>' +
                              '<p>'+ p6.price + ' ksh</p>' +
                              '<p class="card-text">' + p6.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }
        else if(window.name==="p7") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p7.pName +'-'+ p7.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p7.picture + '"alt="Card image '+ p7.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p7.pName + '</h5>' +
                              '<p>'+ p7.price + ' ksh</p>' +
                              '<p class="card-text">' + p7.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }
        else if(window.name==="p8") {
          $("#productsdetails").append('<div class="column">' +
                   '<div class="card" id="#'+ p8.pName +'-'+ p8.pID +'" style="width: 18rem;">'+
                          '<img class="card-img-top" src="'+ p8.picture + '"alt="Card image '+ p8.pName + '">'+
                          '<div class="card-body">' +
                              '<h5 class="card-title">'+ p8.pName + '</h5>' +
                              '<p>'+ p8.price + ' ksh</p>' +
                              '<p class="card-text">' + p8.description + '</p>'+
                          '</div>' +
                          '<div class="card-footer">' +
                          '</div>'+
                      '</div>'+
                  '</div>'
                );
        }

});
