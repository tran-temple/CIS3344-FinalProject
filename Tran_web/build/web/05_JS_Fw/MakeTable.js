function MakeTable(params) {

    // validate that you have what you need in the params object
    if (!params) {
        alert("Must pass in a parameter object to MakeTable");
        return;
    }

    if (!params.id || !document.getElementById(params.id)) {
        alert("Parameter object must have an 'id' property that references a valid DOM object");
        return;
    }

    // Add th or td (based on eleType) to row of HTML table.
    function addToRow(eleType, row, data, alignment) {
        var ele = document.createElement(eleType);
        ele.innerHTML = data;
        ele.style.textAlign = alignment;
        row.appendChild(ele);
        return ele;  // future code may need a reference to this dom object
    }

    function sort(list, byProperty) {

        // using q and z just to show there's nothing magical about a and b. 
        // q and z are just elements in the array and the funcction has to return negative or positive or zero 
        // depending on the comparison of q and z.
        // using JS associative array notation (property name char string used inside square brackets 
        // as it if was an index value). 

        list.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 
            // the function you create is supposed to return positive (if first bigger), 0 if equal, negative otherwise.

            // using JS associative array notation, extract the 'byProperty' property from the two
            // list elements so you can compare them.
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
        }); // end of list.sort()

        function convert(s) {
            var tmp = s.replace("$", ""); // remove dollar signs
            tmp = tmp.replace(",", ""); // remove commas

            if (isNaN(tmp)) { // if not a number (after removing $ and ,) return upper case string.
                return s.toUpperCase();
            } else {
                return Number(tmp);
            }
        }
    } // end of jsSort()

    // ********************** ajax *************************************   
    // Make an ajax call to the given url, then if the call was successful, 
    // call the Success Callback fn, otherwise, set an error message into the 
    // DOM element that has id 'errorId'.
    function ajax(url, callBackSuccess, errorId) {

        // The httpReq Object is now local to function "ajaxCall" (not global)
        var httpReq;
        if (window.XMLHttpRequest) {
            httpReq = new XMLHttpRequest(); //For Firefox, Safari, Opera
        } else if (window.ActiveXObject) {
            httpReq = new ActiveXObject("Microsoft.XMLHTTP"); //For IE 5+
        } else {
            alert('ajax not supported');
        }

        console.log("ready to get content " + url);
        httpReq.open("GET", url); // specify which page you want to get

        // Ajax calls are asyncrhonous (non-blocking). Specify the code that you 
        // want to run when the response (to the http request) is available. 
        httpReq.onreadystatechange = callBack;
        httpReq.send(null); // initiate ajax call

        function callBack() { // the browser will invoke this function when the data is ready

            // readyState == 4 means that the http request is complete
            if (httpReq.readyState === 4) {
                if (httpReq.status === 200) {
                    var jsonString = httpReq.responseText;
                    var obj = JSON.parse(jsonString);
                    callBackSuccess(obj);
                } else {
                    // First use of property creates new (custom) property
                    document.getElementById(errorId).innerHTML = "Error (" + httpReq.status + " " + httpReq.statusText +
                            ") while attempting to read '" + url + "'";
                }
            }
        }

    } // end function ajax

    // get data from params object
    var tableContainer = document.getElementById(params.id);
    var jsonURL = params.jsonFile;
    var typeList = params.typeList;
    var key = params.id;

    // invoke ajax function to read json and if the call was successful, 
    // run function processJSON, otherwise, put an error message in the DOM element 
    // that has id get from params object.
    ajax(jsonURL, processData, tableContainer);

    function processData(list) {
        console.log(list);  // list is an array of objects

        // convert the image URL into an HTML img tag.
        for (var i = 0; i < list.length; i++) {
            list[i].Image = "<img src='" + list[i].Image + "'/>";
        }

        if (getItem(key) !== null) {
            sort(list, getItem(key));
        }

        // Create a new HTML table (DOM object) and append 
        // that into the page.
        var newTable = document.createElement("table");
        // Create a header for table and put a row in the header
        var tableHead = document.createElement("thead");
        newTable.appendChild(tableHead);
        var tableHeadRow = document.createElement("tr");
        tableHead.appendChild(tableHeadRow);

        // iterate over the properties of the first object
        var obj = list[0];
        console.log(list);
        var i = 0;
        for (var prop in obj) {
            // Associative array notation: even though "prop" is a character string (field name), you can use it 
            // as if it were an index value inside of square brackets - this returns the value of the property. 
            console.log('property is ' + prop + ' and its value is ' + obj[prop]);
            var align = setAlign(typeList[i]);
            var header = addToRow("th", tableHeadRow, prop, align);
            i++;
            // Add onclick event handler for each th element
            header.onclick = function () {
                setItem(key, this.innerHTML);
                MakeTable(params);  // this means the <th> that was clicked, innerHTML should hold the property name
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

            var j = 0;
            // a loop that iterates over all the property values in each object got from the JSON file.
            for (var prop in obj) {
                console.log('property is ' + prop + ' and its value is ' + obj[prop]);
                var align = setAlign(typeList[j]);
                var data = obj[prop];
                if (typeList[j] === "$") {
                    data = formatCurrency(Number(obj[prop]));
                }
                addToRow("td", tableRow, data, align);
                j++;
            }
        }

        document.getElementById(params.id).innerHTML = ""; // blank it out first
        document.getElementById(params.id).appendChild(newTable);
    }

    // set alignment for columns
    function setAlign(type) {
        if (type === "s")
            return "left";
        if (type === "i")
            return "center";
        if (type === "$")
            return "right";
    }

    // format currency data
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    function setItem(key, data) {
        localStorage.setItem(key, data);
        console.log("key '" + key + "' written to Local Storage with this value: " + data);
    }
    
    function getItem(key) {
        var data = localStorage.getItem(key);
        console.log("key '" + key + "' read from Local Storage with value: " + data);
        return data;
    }
    
    tableContainer.setStyle = function (color){
        console.log(tableContainer);
        tableContainer.style.backgroundColor = color;        
    };
    
    return tableContainer;

}
