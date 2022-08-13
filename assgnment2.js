

// print a program of a product which price  less than 60000
var products = [
    {
      brand: "Apple",
      price: 90000,
    },
    {
      brand: "Oppo",
      price: 50000,
    },
    {
      brand: "oneplus",
      price: 60000,
    },
    {
      brand: "Samsung",
      price: 90000,
    },
    {
      brand: "Apple",
      price: 50000,
    },
    {
      brand: "Apple",
      price: 60000,
    },
  ];
  products.forEach(function(element,idex){
    if(element.price<60000)
console.log(element,idex);

})
  