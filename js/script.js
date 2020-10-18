function myFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function myDiv() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
 
  function totalPrice (){
    var price = 0;
    var selectedSize = document.getElementById("sizes")
    var CostOfSize = selectedSize.options[selectedSize.selectedIndex].value;
    var selectedCrust = document.getElementById("crusts")
    var CostOfCrust = selectedCrust.options[selectedCrust.selectedIndex].value;
    var selectedTopping = document.getElementById("toppings")
    var CostOfToppings = selectedTopping.options[selectedCrust.selectedIndex].value;
    var QuantityOfPizza = document.getElementById("numberOfPizzas").value;
    price = parseInt(CostOfSize) + parseInt(CostOfCrust) + parseInt(CostOfToppings)
    totalPrice = price * parseInt(QuantityOfPizza);
    document.getElementById("total").value = totalPrice;
    event.preventDefault();
  };
  function totalPrice1 (){
    var price = 0;
    var selectedSize = document.getElementById("sizes1")
    var CostOfSize = selectedSize.options[selectedSize.selectedIndex].value;
    var selectedCrust = document.getElementById("crusts1")
    var CostOfCrust = selectedCrust.options[selectedCrust.selectedIndex].value;
    var selectedTopping = document.getElementById("toppings1")
    var CostOfToppings = selectedTopping.options[selectedCrust.selectedIndex].value;
    var QuantityOfPizza = document.getElementById("numberOfPizzas1").value;
    price = parseInt(CostOfSize) + parseInt(CostOfCrust) + parseInt(CostOfToppings)
    totalPrice = price * parseInt(QuantityOfPizza);
    document.getElementById("totalDelivery").value = totalPrice;
    event.preventDefault();
  } $(document).ready (function(){
  
  })
