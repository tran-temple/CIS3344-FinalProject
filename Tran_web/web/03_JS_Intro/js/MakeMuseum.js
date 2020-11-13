function MakeMuseum(id, theName, theTicketPrice, theLocation, theImg, theColor, hoverColor) {

    var MuseumObj = document.getElementById(id); // get reference to DOM object with the given id
    MuseumObj.name = theName;          // first use of “name” creates custom public property
    var ticketPrice = theTicketPrice;      // create custom private property “ticket price”
    MuseumObj.location = theLocation;      // create custom public property “location”

    MuseumObj.display = function ( ) { // create custom public method “display”
        // make the current properties visible on the page - including the image
        MuseumObj.innerHTML = "<img style='box-shadow: 0px 0px 5px black' src='" + theImg + "'>" +
                "<br/><b>Place: </b>" + MuseumObj.name +
                "<br/><b>Ticket Price for Adults: </b>" + formatCurrency(ticketPrice) +
                "<br/><b>Location: </b>" + MuseumObj.location;
        // set the CSS style
        MuseumObj.style.backgroundColor = theColor;
    };

    MuseumObj.setName = function (newName) { // create custom public method “setName”
        MuseumObj.name = newName;
        MuseumObj.display(); // show updated property on the page
    };

    MuseumObj.setLocation = function (newLocation) { // create custom public method "setLocation"
        MuseumObj.location = newLocation;
        MuseumObj.display();
    };

    MuseumObj.setTicketPrice = function (newPrice) { // create custom public method "setTicketPrice"
        ticketPrice = Number(newPrice);
        MuseumObj.display();
    };

    MuseumObj.changeTicketPrice = function (changeRate) { // create custom public method “changeTicketPrice”
        changeRate = Number(changeRate); // Number is a built-in JS fn.
        ticketPrice = ticketPrice * (1 + changeRate);
        MuseumObj.display(); // show updated ticket price on the page
    };
    
    MuseumObj.onmouseover = function () {
        console.log("onmouseover");
        MuseumObj.style.backgroundColor = hoverColor;
    };
    MuseumObj.onmouseout = function () {
        console.log("onmouseout");
        MuseumObj.style.backgroundColor = theColor;
    };

    MuseumObj.log = function () { // create custom public method “log”
        console.log("Name of museum with id " + MuseumObj.id + " is " + MuseumObj.name + " and ticket price for Adults is $" + ticketPrice);
    };

    // private function, can only be used within MakeMuseum
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    MuseumObj.display();  // call the display fn to show initial properties on the page 
    return MuseumObj;
}
