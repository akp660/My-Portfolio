/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add( 'active')
          });
        };
  });

 
// ====================== sticky navabr ======================

let header = document.querySelector('header');

header.classList.toggle('sticky',window.screenY>100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};
/*==================== scroll reveal ====================*/

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,

});

ScrollReveal().reveal('.home-content, .heading' , {origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ,.education-row ,.skills-row'  , {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img' , {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content' , {origin: 'right'})
/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer ', 'Native Android Developer ', 'UI/UX Designer '],
  typeSpeed: 100,
  backSpeed: 100,
  backDeley: 2000,
  loop: true
});

/*==================== date and time ====================*/

const currentDate = new Date();
const timestamp = currentDate.getHours();


if (timestamp>0 && timestamp<12) {
  document.getElementById("time").innerHTML="Good Morning,"
}
else if(timestamp>12 && timestamp<15){
  document.getElementById("time").innerHTML="Good Afternoon,"
}

else if(timestamp>15){
  document.getElementById("time").innerHTML="Good Evening,"
}

/*==================== email ====================*/

let popup = document.getElementById("popup1");

function sendMail() {
  var params={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    text: document.getElementById("text").value,
  };

  const serviceID="service_hsl1c5x";
const templetID="template_in8z0jc";

emailjs.send(serviceID,templetID,params)
.then(
  res =>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("subject").value="";
    document.getElementById("text").value="";
    console.log(res);
    // alert("your message is sent");
    
    // document.getElementById("popup1").style.visibility = "visible";
    
  }
)

.catch((err)=> console.log(err));
popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}

