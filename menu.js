function order() {
    //prevent page auto-reload?
    event.preventDefault();

    //var customerOrder
    var customerOrder = "Item: " + document.getElementById("item").value + ", Qty: " + document.getElementById("qty").value;

    //log customerOrder
    console.log(customerOrder);

    //reset form
    document.getElementById("orderForm").reset();

    //confirmation message
    document.getElementById("successMessage").innerHTML = "Thanks, we've received your order: <br> " + customerOrder;
};


