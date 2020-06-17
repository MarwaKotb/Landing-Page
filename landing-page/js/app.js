
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
const navLinks = document.querySelectorAll('.menu__link');
const sectionsID = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//create elements and assign some elements with attributes

function createSection() {
    const mainS = document.querySelector("main");

    const sectionS = document.createElement('section', {"id":"section4", "data-nav":"section 4" })
   
    const divS = document.createElement("div");
    divS.className = "landing__container";

    const hS = document.createElement("h2");
    hS.textContent = "Section4";
    
    const pS = document.createElement("p"); 
    pS.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";

    divS.appendChild(hS);
    divS.appendChild(pS);
    sectionS.appendChild(divS);
    mainS.appendChild(sectionS);

  }

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
        a.appendChild(linkText);
        
        a.href = `#section${i + 1}`;

        li.appendChild(a);
    }
    
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build New Section

createSection();
createNavMenu();



// Scroll to section on link click

// Set sections as active






