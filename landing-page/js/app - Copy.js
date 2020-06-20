
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
const element_location = (element)=>{
  let bodyElem = document.body.getBoundingClientRect().top;
  let element_section = element.getBoundingClientRect().top;
  let area_offset = element_section - bodyElem;
  return area_offset; 
}

const section_location_scrolling = ()=>{
   const section_top_points = [];
  for (section_element of sections){
    section_top_points.push(element_location(section_element));
  }
  return section_top_points;
}

const scroll_active_links = ()=>{
  const section_points = section_location_scrolling();
  for(let i = 0; i < section_points.length; i++){
    const links = document.querySelectorAll(".menu__link");
    if(window.scrollY >= section_points[i] && !(window.scrollY > section_points[i+1])){
      links[i].style.cssText = "background-color: green;";
    }else{
      links[i].style.cssText = "background-color: #fff;";
    }
  }
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
       div.scrollIntoView({behavior: 'smooth'});  
		// window.scrollTo(div.offsetTop,div.offsetTop);    
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
//activate link during scrolling
window.addEventListener("scroll", scroll_active_links);





