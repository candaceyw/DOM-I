const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.querySelectorAll('a');
// navigation[0].textContent = siteContent['nav']['nav-item-1'];
// navigation[1].textContent = siteContent['nav']['nav-item-2'];
// navigation[2].textContent = siteContent['nav']['nav-item-3'];
// navigation[3].textContent = siteContent['nav']['nav-item-4'];
// navigation[4].textContent = siteContent['nav']['nav-item-5'];
// navigation[5].textContent = siteContent['nav']['nav-item-6'];
navigation.forEach((element, i) => {
  element.textContent = siteContent['nav'][`nav-item-${i+1}`]
} )

let ctaimg = document.getElementById("cta-img")
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctatext = document.querySelector(".cta-text h1");
ctatext.textContent = siteContent["cta"]["h1"];

ctatext.innerHTML = siteContent.cta.h1.split(' ').join('<br>');

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];
document.querySelector('button').style.borderRadius = "25px"


button.addEventListener('click', (event) => {
  alert('Getting started is cool! Too bad this button doesn\'t go anywhere, mwahahahahaha!')
})


let textH4 = document.querySelectorAll(".text-content h4");
textH4[0].textContent = siteContent['main-content']['features-h4'];
textH4[1].textContent = siteContent['main-content']['about-h4'];
textH4[2].textContent = siteContent['main-content']['services-h4'];
textH4[3].textContent = siteContent['main-content']['product-h4'];
textH4[4].textContent = siteContent['main-content']['vision-h4'];


let textp = document.querySelectorAll(".text-content p");
textp[0].textContent = siteContent['main-content']['features-content'];
textp[1].textContent = siteContent['main-content']['about-content'];
textp[2].textContent = siteContent['main-content']['services-content'];
textp[3].textContent = siteContent['main-content']['product-content'];
textp[4].textContent = siteContent['main-content']['vision-content'];


let aboutp = document.querySelector(".text-content p");
aboutp.textContent = siteContent['main-content']['about-content'];

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent['contact']['contact-h4'];


let copyright = document.querySelector("footer p");
copyright.textContent = siteContent['footer']['copyright'];


let newNavA = document.createElement('a');
newNavA.textContent = 'Hello';
document.querySelector('nav').prepend(newNavA);

let newNavB = document.createElement('a');
newNavB.textContent = 'Goodbye';
document.querySelector('nav').appendChild(newNavB);


const navColor = document.querySelectorAll('a');
navColor.forEach( element => {
  element.style.color = 'green';
});


const contentHeader = document.querySelectorAll(".text-content h4");
contentHeader.forEach( element => {
  element.style.color = 'SteelBlue';
});

const mainHeader = document.querySelectorAll(".cta-text h1");
mainHeader.forEach( element => {
  element.style.color = 'SteelBlue';
});


document.body.style.background = "#f3f3f3"
contactText[0].innerHTML = siteContent.contact.address.split('t S').join('t<br>S');



function myFunction(){
var btn = document.createElement("button");   // Create a <button> element
btn.innerHTML = "Don't click it!";                   // Insert text
document.body.appendChild(btn);   
}