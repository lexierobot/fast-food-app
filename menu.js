function order(){
    //prevent page auto-reload?
    event.preventDefault();

    //var customerOrder
    var customerOrder = document.getElementById("item").value;

    //log customerOrder
    console.log(customerOrder);

    //reset form
    document.getElementById("orderForm").reset();

    //confirmation message
    document.getElementById("successMessage").innerHTML = "Thanks, we've received your order: <br> " + customerOrder;

    //split string at commas, then trim
    let splitOrder = customerOrder.split(',')
    ;
    for (var i = 0; i < splitOrder.length; i++) {
        splitOrder[i] = splitOrder[i].trim();
    }
    //check
    console.log(splitOrder);

      //split & trim again
      for (x in splitOrder) {
        console.log(splitOrder[x].split(':'));
        console.log(splitOrder[x].trim());
        }
    };

  

//Menu & Stock Qty Object
let menu = {
    //sandwiches
    'hamburger': 25,
    'cheeseburger': 14,
    'grilled chicken': 33,
    //sides
    'french fries': 20,
    'sweet potato fries': 3,
    'salad': 4,
    //drinks
    'coke': 100,
    'diet coke': 30,
    'bottled water': 20,
    //milkshakes
    'milkshake': 9,
    'cookie': 80,
    'candy': 5,
};