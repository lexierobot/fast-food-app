//Add Event Listener to Order Button
var customerOrder = document.getElementById("submitOrder").addEventListener("click", confirmOrder);

function confirmOrder() {
    //prevent page reload?
    event.preventDefault();

    //console log the order details
    console.log("Order received. Item: " + document.getElementById("item").value + ", Qty: " + document.getElementById("qty").value);

    //reset form
    document.getElementById("orderForm").reset();

    //print confirmation message for customer
    document.getElementById("confirmOrder").innerHTML = "Thanks! We've received your order of... Item: " + document.getElementById("item").value + ", Qty: " + document.getElementById("qty").value;
};


// Display Order Details