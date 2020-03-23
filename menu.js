//Menu Object
let menu = {
    //sandwiches
    'hamburger': 25,
    'cheeseburger': 14,
    'grilled chicken': 33,
    //sides
    'french fries': 20,
    'sweet potato fries': 3,
    'salad': 4,
    //drinksd
    'coke': 100,
    'diet coke': 30,
    'bottled water': 20,
    //milkshakes
    'milkshake': 9,
    'cookie': 80,
    'candy': 5,
};

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

    //split string at commas, then colon
    let splitOrder = customerOrder.split(',');
    for (let i = 0; i <splitOrder.length; i++) {
        let splitOrderAgain = splitOrder[i].split(":");

        //check
        console.log(splitOrderAgain);

        //trim order
        for (let j = 0; j < splitOrderAgain.length; j++) {
            let trimOrder = splitOrderAgain[j].trim();

            //remove special characters
            let newOrder = trimOrder.replace(/[^a-zA-Z0-9: ]/g, '');

            //check input
            console.log(newOrder);

            for(let k in menu) {
                function checkItem(item) {
                if(menu[k].properties === newOrder){
                    console.log (newOrder + "exists")
                } else {
                    console.log (newOrder + " does not exist");
                }
            }} checkItem();

                    // console.log(`${property}: ${menu[property]}`);
        }
    }
};
