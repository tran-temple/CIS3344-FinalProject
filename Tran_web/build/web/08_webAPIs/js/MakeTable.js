// this car object has no visual component, not linked to DOM object
function MakeTable(id, list, sortProperty) {

    // This function sorts the array of objects in "list" by object property "byProperty". 
    // Think of list as an I/O parameter (gets changed by the fn).
    function sort(list, byProperty) {

        // if list is a js array, there is a built in method called .sort() but you must pass .sort() 
        // a function that compares two elements and returns -1 or 0 or 1 depending on how the two elements compare.
        // q and z are just elements in the array and the funcction has to return negative or positive or zero 
        // depending on the comparison of q and z.
        list.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 
            // the function you create is supposed to return positive (if first bigger), 0 if equal, negative otherwise.

            // using JS associative array notation, extract the 'byProperty' property from the two
            // list elements so you can compare them. But send each value to a convert function which 
            // will convert string elements into the property type for proper conversion.
            var qVal = convert(q[byProperty]);
            var zVal = convert(z[byProperty]);

            var c = 0;
            if (qVal > zVal) {
                c = 1;
            } else if (qVal < zVal) {
                c = -1;
            }
            console.log("comparing " + qVal + " to " + zVal + " is " + c);
            return c;
        });
    } // end of sort function


    // constant needed for date conversion/comparison
    var factor = 1000; // turn milliseconds into seconds
    factor *= 60; // turn seconds into minutes
    factor *= 60; // turn minutes into hours
    factor *= 24; // turn hours into days

// Convert a string to the proper type for the purpose of sorting. 
// Empty string returns -1.
// If the String contains a Date, return a number that represents how many days from approx jan 1, 1870. 
// If the String value contains a number, convert to number and return that (but after removing 
// commas and dollar signs that may be part of formatted numeric values).
// Else return the capitalized version of the String value that came in. 
    function convert(s) {

        if (!s || s.length === 0) {
            //console.log("s is null or empty string");
            return -1;
        }

        // a string that holds a date returns true for isNaN(strDate) (it's not a number)  
        // And it returns false for isNaN(Date.parse(strDate))
        var parsedDate = Date.parse(s);
        if (isNaN(s) && !isNaN(parsedDate)) {
            console.log(s + " is a Date ");

            // Date.parse(s) returns milliseconds since jan 1, 1970
            // Dividing by factor turns milliseconds into days ('factor' variable set about 20 lines above).
            // Adding 365000 makes it the number of days from approx 100 years prior to jan 1, 1970.
            // We do this to avoid getting negative number values prior to jan 1, 1970.
            var p = (parsedDate / factor) + (36500);
            console.log("Date " + s + " has numeric value " + p + " (approx days since 100 years ago)");
            return p;
        } else {
            var tmp = s;
            tmp = tmp.replace("$", ""); // remove dollar signs
            tmp = tmp.replace(",", ""); // remove commas
            if (isNaN(tmp)) { // if not a number, return what was passed in 
                //console.log(s + " is a string - convert to uppercase for sorting purposes");
                return s.toUpperCase();
            } else {
                //console.log(tmp + " is a number");
                return Number(tmp);
            }
        }
    } // convert 


    sort(list, sortProperty);

// Create a new HTML table (DOM object) - wait till ready before appending it.
    var newTable = document.createElement("table");

// Create a header for table and put a row in the header
    var tableHead = document.createElement("thead");
    newTable.appendChild(tableHead);
    var tableHeadRow = document.createElement("tr");
    tableHead.appendChild(tableHeadRow);

// create all the <th> elements (based on name of property in first object of array)
    var obj = list[0];
    for (var prop in obj) {
        var header = addToRow("th", tableHeadRow, prop, "left");

        // Add click event to sort by the property stored in this column. 
        header.onclick = function () {
            console.log("ready to sort by this property: "+this.innerHTML);
            // name in <th> must match exactly the property name in list of objects. 
            MakeTable(id, list, this.innerHTML);
        };
    }

// Add one row (to HTML table) per element in the array.
// Each array element has a list of properties that will become 
// td elements (Table Data, a cell) in the HTML table. 
    var tableBody = document.createElement("tbody");
    newTable.appendChild(tableBody);
    for (var i in list) {
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        var obj = list[i];

        for (var prop in obj) {
            var align = "left";
            if (obj[prop].includes("$")) {
                align="right";
            }
            addToRow("td", tableRow, obj[prop], align);
        }
    }

// Add th or td (based on eleType) to row of HTML table.
    function addToRow(eleType, row, data, alignment) {
        var ele = document.createElement(eleType);
        ele.innerHTML = data;
        ele.style.textAlign = alignment;
        row.appendChild(ele);
        return ele;
    }

    document.getElementById(id).innerHTML = ""; // clear it
    // out the parent DOM object
    document.getElementById(id).appendChild(newTable); // then append the HTML table into it

} // end MakeTable