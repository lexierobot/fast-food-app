//Menu Object
let menu = {
    'hamburger': 25,
    'cheeseburger': 14,
    'chicken': 33,
    'fries': 20,
    'tots': 3,
    'salad': 4,
    'coke': 100,
    'tea': 30,
    'water': 20,
    'milkshake': 9,
    'cookie': 80,
    'candy': 5
};

function order(){
    //prevent page auto-reload?
    event.preventDefault();
    //var customerOrder
    var customerOrder = document.getElementById("item").value;
    //log user input to console test
    console.log(customerOrder);
    //reset order form
    document.getElementById("orderForm").reset();
    //display order receipt to customer
    document.getElementById("successMessage").innerHTML = "Thanks, we've received your order: <br> " + customerOrder;

    //split string at commas, then colon
    let splitOrder = customerOrder.split(',');
    for (let i = 0; i <splitOrder.length; i++) {
        let splitOrderAgain = splitOrder[i].split(":");

        //trim order
        for (let j = 0; j < splitOrderAgain.length; j++) {
            let trimOrder = splitOrderAgain[j].trim();

            //remove special characters just for regex
            let newOrder = trimOrder.replace(/[^a-zA-Z0-9: ]/g, '');

            //NOT WORKING CORRECTLY
        // //check order input against menu items
        // for(let x in menu) {
        //     if(x === newOrder){
        //         console.log(newOrder + " exists");
        //     } else if(x !== newOrder){
        //         console.log(newOrder + " does not exist.");
        //     }
        // }
        // //check stock qty
        // for(let x in menu) {
        //     if(menu[x] <= newOrder){
        //         return menu[x] - newOrder;
        //     }console.log(newOrder);
        }
    }
};
