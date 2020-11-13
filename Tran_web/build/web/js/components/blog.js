function blog(id) {

var content = `  
        <h3>Homework 1: Web Home Page</h3>
            <p>
                My web experience consists of HTML and CSS; however, it is only basic knowledge of them. 
                After working with the first homework “Home Page”, I learnt how to deal with fixed layout and fluid layout. 
                It is easy to make a simple home page with HTML and some standard common CSS. 
                The “dropdown menu” CSS is one of hard parts and confusing. 
                I used professor’s sample code and tutorials from “w3schools” to understand more about CSS.
            </p>

        <h3>Homework 2: Routing</h3>
            <p>
                The second homework “Routing” is interesting. 
                I learnt how to use javascript to route pages. 
                Sample code of routing is very useful. 
                It is easy when I design to route two different pages such as “index.html” and “blog.html”. 
                It is harder when I design only one index.html and write more scripts to route using components such as “home.js” and “blog.js”. 
                Declaration a (private) array to store routes is amazing and efficient. 
                This array is an associative array with key [index] the URL and value the associated function to run. 
            </p>

        <h3>Homework 3: JavaSript Intro</h3>
            <p>               
                The experience with Java helped me to learn quicker about Javascript. 
                They are similar; however, Javascript has important differences. For instance, Javascript is interpreted and loosely type. 
                Moreover, a function can be defined within another function. There can be JavaScript code before and/or after functions. 
                Finally, this homework 3 provided many aspects of Javascript. Creating Javascript Objects is very useful. 
                My code is organized better, so I can figure out errors or maintain to update function easier. 
                Event Handling is amazing. Showing log on the console is very helpful to look for errors and fix them. 
                Separating which properties and methods are public or private that is confusing; however, it is not so hard.
                <br/>
                <a target="_blank" href="03_JS_Intro/index.html">Click this link to the index.html of JS Intro</a>
            </p>
        
        <h3>Homework 4: JavaSript Advanced</h3>
            <p>               
                Working with arrays and using an array of objects are not easy; however, I learnt how to work with them through this Homework. 
                The sample code is very helpful to start from simple steps to more complex steps, and then understand using arrays. 
                Furthermore, I get benefits of using a parameter object instead of a parameter list. 
                It makes the Javascript function looks better for invoking and maintaining. 
                Finally, learning how to enhance a DOM object (e.g., div) with more more complex sub objects, properties, events, and methods are very useful.
                <br/>
                <a target="_blank" href="04_JS_Adv/index.html">Click this link to the index.html of JS Advanced</a>
            </p>
        
        <h3>Homework 5: JavaSript Framework</h3>
            <p>               
                JSON is a lightweight format for storing and transporting data. It is easy for me to read and write. 
                In contrast, Ajax is more difficult to understand in coding with Javascript. 
                For using Ajax, I can update a web page without reloading the page. It is not a programming language. 
                Using Ajax is combination of a browser built-in XMLHttpRequest object (to request data from a web server) 
                and JavaScript and HTML DOM (to display or use the data).
                <br/>
                <a target="_blank" href="05_JS_Fw/index.html">Click this link to the index.html of JS Framework</a>
            </p>
        
        <h3>Homework 6: Tutorial Proposal</h3>
            <p>               
                The w3schools.com with How To page has many helpful examples.
                Selecting and combining effects to create a useful widget are challenging and interesting.
                For me, I selected how to do a video background and combined with the lightbox effect which shows the modal image gallery. 
                Working with the video is not easy. The video tag specifies video, such as a movie clip or other video streams. 
                Currently, there are 3 supported video formats for the video element: MP4, WebM, and Ogg. 
                If I would like to embed the youtube video, I could not use the video tag. 
                For the lightbox effect, it is easier because the How To page of the w3schools.com showed steps clearly.
                <br/>
                <a target="_blank" href="tutorial/poc.html">Click this link to the poc.html of Tutorial Proposal</a></br>
                <a target="_blank" href="tutorial/proposal.pdf">Click this link to the proposal.pdf of Tutorial Proposal</a>
            </p>
        
        <h3>Homework 7: Database</h3>
            <p>               
                Taking the previous Database course is very helpful in this Homework. 
                The homework is easy to finish. The provided guide documents are very useful. 
                Only connecting to Temple database requires more steps and I have to do them carefully.                
                <br/>
                <a target="_blank" href="07_DB/index.html">Click this link to the index.html of Database</a></br>
                <a target="_blank" href="07_DB/tranDB.pdf">Click this link to the tranDB.pdf of Database</a>
            </p>
        
        <h3>Homework 8: Web API</h3>
            <p>               
                Firstly, working with the Tutorial “Using Java/JSP to Write a Web API” is very useful. 
                Simulation to get errors such as Missing Database Driver, Database Unreachable, Database Not Authorized, 
                Syntax error in SQL Statement, Error Extracting Data from Result Set - bad column name or wrong data type 
                will be much better for us to find and debug our own errors when writing server side web code.
                Finally, the homework is not hard. We only need to follow steps and organize our source codes to avoid errors.                
                <br/>
                <a target="_blank" href="08_webAPIs/webAPIs/listUsersAPI.jsp">Click this link to the listUsersAPI.jsp of Web API Homework</a></br>    
                <a target="_blank" href="08_webAPIs/listUsers.html">Click this link to the listUsers.html of Web API Homework</a></br>
                <a target="_blank" href="08_webAPIs/webAPIs/listOtherAPI.jsp">Click this link to the listOtherAPI.jsp of Web API Homework</a></br>    
                <a target="_blank" href="08_webAPIs/listOther.html">Click this link to the listOther.html of Web API Homework</a></br>
                <a target="_blank" href="08_webAPIs/tran_HW08.pdf">Click this link to the tran_HW08.pdf of Web API Homework</a>
            </p>
        
        <h3>Tutorial Final</h3>
            <p>
                The component is finished and named VideoLightBox. The idea as well as effects are taken from the w3schools.com. 
                The w3schools.com with How To page has many helpful examples.
                Selecting and combining effects to create a useful widget are challenging and interesting.
                I selected how to do a video background and combined with the lightbox effect which shows the modal image gallery. 
                Working with the video is not easy. The video tag specifies video, such as a movie clip or other video streams. 
                Currently, there are 3 supported video formats for the video element: MP4, WebM, and Ogg. 
                If I would like to embed the youtube video, I could not use the video tag. 
                Therefore, if HTML coders would like to embed the URL youtube video, the component will be improved in the next time whenever there is more development time.
                For the lightbox effect, it is easier because the How To page of the w3schools.com showed steps clearly.
                <br/>
                <a target="_blank" href="tutorial/index.html">Click this link to the index.html describes my component and shows the HTML coder how to use it</a></br>
            </p>
        
        <h3>Homework 9: React Intro</h3>
            <p>               
                This React Intro homework is not difficult. The server side code is reusable from the previous Homework 8 - Web API. 
                Simulation to get errors from Homework 8 is also very helpful. For this new Homework 9, we only change code at two HTML pages and create two React components. 
                Two those tasks are easy because the sample code showed clearly steps and they are easy to understand. 
                Some specific points that are adding the three CDNs to the head section of the HTML files (two for React and one for the Babel transpiler); 
                doing reference to new JS file (do not forget to add the "text/babel" type to the script tag); and adding type = "text/babel" to the regular script tag in the HTML files.
                <br/>
                <a target="_blank" href="09_React_Intro/listUsers.html">Click this link to the React: Users</a><br/>
                <a target="_blank" href="09_React_Intro/listOther.html">Click this link to the React: Museums</a>
            </p>
    `;
    document.getElementById(id).innerHTML = content;
}