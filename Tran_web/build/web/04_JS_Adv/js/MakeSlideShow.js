function MakeSlideShow(params) {

    // validate that you have what you need in the params object
    if (!params) {
        alert("Must pass in a parameter object to MakeSlideShow");
        return;
    }

    if (!params.id || !document.getElementById(params.id)) {
        alert("Parameter object must have an 'id' property that references a valid DOM object");
        return;
    }

    // get reference to the DOM object inside which the SlideShow image 
    // and buttons will be created.
    var slideShow = document.getElementById(params.id);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to the 1st picture in the list
    var myImage = document.createElement("img");
    var myBorder = params.border;
    if (myBorder === "") {
        myImage.style.border = "2px solid black"; // set the default value
    } else {
        myImage.style.border = params.border; // set the border style for image
    }
    div.append(myImage);
    myImage.src = params.folder + params.picList[0].fileName;

    // add caption to the 1st picture in the list
    var myCaption = document.createElement("span");
    myCaption.className = params.class; // add the css classname for the caption
    myCaption.innerHTML = params.picList[0].caption;
    slideShow.appendChild(myCaption);

    slideShow.appendChild(document.createElement("br"));

    // add back button under the image (and space between buttons)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button after back button and space
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    slideShow.appendChild(document.createElement("br"));

    // Private variable that keeps track of which image is showing
    var picNum = 0;

    // Private method to advance to next image in the picture list
    function nextPic() {
        picNum++;
        if (picNum >= params.picList.length) {
            picNum = 0;
        }
        // change the src attribute of the image element to the desired new image)				
        myImage.src = params.folder + params.picList[picNum].fileName;
        //update the caption for the image
        myCaption.innerHTML = params.picList[picNum].caption;
    }

    // Private method to go back to the previous image in the picture list
    function prevPic() {
        picNum--;
        if (picNum < 0) {
            picNum = params.picList.length - 1;
        }
        // change the src attribute of the image element to the desired new image				
        myImage.src = params.folder + params.picList[picNum].fileName;
        //update the caption for the image
        myCaption.innerHTML = params.picList[picNum].caption;
    }

    // Whenever anyone clicks the back button, make the prevPic method run
    // Whenever anyone clicks the fwd button, make the nextPic method run
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    // A public method that the HTML coder can invoke when/if they want to 
    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < params.picList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image			
            myImage.src = params.folder + params.picList[picNum].fileName;
            myCaption.innerHTML = params.picList[picNum].caption;
        }
    };

    // go: AUTO ADVANCE
    var intervalHandler;
    slideShow.go = function (intervalMillisecs) {
        intervalHandler = setInterval(nextPic, intervalMillisecs);
    };

    // STOP AUTO ADVANCE
    slideShow.stop = function () {
        clearInterval(intervalHandler);
    };

    return slideShow;
}