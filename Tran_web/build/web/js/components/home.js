function home(id) {
    
    var content = `
        <p>
            Philadelphia, Pennsylvania’s largest city, is notable for its rich history, 
            on display at the Liberty Bell, Independence Hall (where the Declaration of Independence and Constitution were signed) 
            and other American Revolutionary sites. Also iconic are the steps of the Philadelphia Museum of Art, 
            immortalized by Sylvester Stallone’s triumphant run in the film "Rocky."
        </p>

        <p class="center">
            <img class="pictures" src="pics/philadelphia_940x540.jpg">
        </p>    
        <h2 class="center">
            <a href="https://www.visitphilly.com/articles/philadelphia/top-reasons-to-visit-philadelphia-2020/" target="_blank">
                >> The Top New Reasons to Visit Philadelphia in 2020
            </a>                
        </h2>
    `;
    document.getElementById(id).innerHTML = content;
}