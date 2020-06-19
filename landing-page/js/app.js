
/*jslint plusplus: true, evil: true */


// /*global console,  alert, prompt*/

 /*global document: true */
/*eslint-env browser*/


/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const sectionsID = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//create elements and assign some elements with attributes



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavMenu() {
   
    for(let i = 1; i <= sections.length; i++){
        let selector = `#section${i}`
        sectionsID.push(selector);
        
    }
        
    for(let i = 0; i < sections.length; i++){
        const section = sections[i];

        const li = document.createElement('li');
        const a = document.createElement('a');
        console.log(sections[i]);
        
        li.classList.add(sections[i].getAttribute('id'));
        navList.appendChild(li);
        
        
        let dataSet = section.getAttribute('data-nav');
        let linkText = document.createTextNode(dataSet);
        
        a.classList.add("menu__link");
        a.setAttribute("data-id",sections[i].getAttribute('id'));

        a.appendChild(linkText);
        li.appendChild(a);
    }
    
}

// Add class 'active' to section when near top of viewport
const setActiveLink = (e) => {
    
    const navItemLinks = document.querySelectorAll('.menu__link');

    // set active for only current clicked link
    if(e.target.classList.contains("menu__link")){
    
        // remove active from all links
        navItemLinks.forEach(link =>{

          link.classList.remove("active");

        });
        //activate target link only
        e.target.classList.add("active");
    }
}



// Scroll to anchor ID using scrollTO event
const scrollToSection = (e) => {
 
    if(e.target.classList.contains("menu__link")){

        let div = document.getElementById(`${e.target.getAttribute("data-id")}`);
        div.scrollIntoView();  
		     
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build New Section
createNavMenu();
// Scroll to section on link click
navList.addEventListener("click",scrollToSection);
// Set sections as active
navList.addEventListener("click",setActiveLink);





