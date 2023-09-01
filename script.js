//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     
    //to highlight nav link when on relevant page
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;                   
        let id = sec.getAttribute('id');
       
        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');              
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');            
            });
        }       
    });    

     //sticky header 
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);


     //remove toggle icon and navbar when clicking nav links to go to page when screen is smaller(scroll)
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

}


//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


