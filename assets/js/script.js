
/////poup section-9 
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var superNav = document.querySelector(".popup-sec");
      superNav.classList.add("show");
  }, 1000);
});
function closepopup(){
var pop = document.querySelector(".popup-sec");
pop.style.display = "none";
}


//////scroll y animation reveal (on div's viewport)
document.addEventListener("DOMContentLoaded", function () {
  var boxes = document.querySelectorAll('.scroll-anime');

  function handleScroll() {
      boxes.forEach(function (box) {
          var triggerPosition = box.getBoundingClientRect().top + window.scrollY;
          var scrollPosition = window.scrollY + window.innerHeight;

          if (scrollPosition > triggerPosition && !box.classList.contains('reveal')) {
              box.classList.add('reveal');
          }
          
      });
  }

  // Initial check on page load
  handleScroll();

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
});

///////////  course menu in mobile
function showCrsMenu(){
  let crsMenu=document.querySelector('.crs-menu-div')
  crsMenu.classList.add('show');
}
function closeCrsMenu(){
  let crsMenu=document.querySelector('.crs-menu-div')
  crsMenu.classList.remove('show');
}
function togglePanel(panelId) {
  let panel = document.getElementById(panelId);

  if (panel) {
    // Toggle the 'show' class on the panel
    panel.classList.toggle('show');
  }
}

///////navbar scroll-y effect
document.addEventListener("DOMContentLoaded", function() {
    var superNav = document.querySelector(".navbar");

    function addScrolledClass() {
        if (window.scrollY > 50) {
            superNav.classList.add("scrolled");
        } else {
            superNav.classList.remove("scrolled");
        }
    }

    // Initial check on page load
    addScrolledClass();

    // Listen for scroll events
    window.addEventListener("scroll", addScrolledClass);
});

/////course slider
var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    autoplay: {
      delay: 3000, // Adjust autoplay delay as needed
    },
    loop: true,
    fade: false, // Disable fade
    centerSlide: false, // Disable centerSlide
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });
  


  /////super nav 
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var superNav = document.querySelector(".superNav-div");
        superNav.style.opacity = "1";
        superNav.style.height = "37px";
    }, 4000);
});
function closeNav(){
  var superNavs = document.querySelector(".superNav-div");
  superNavs.style.display = "none";
  setTimeout(function() {
    var superNav = document.querySelector(".superNav-div");
    superNav.style.opacity = "0";
    superNav.style.height = "0px";
}, 4000);
}


///////accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}






///////change nav background when nav toggler button clicked
function toggleNavbar() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.add("scrolled");
}


//////home page course cards onclick(course)
function course(a) {
  if(a==2){
    window.location.href = 'java.html';
  }else if(a==1){
    window.location.href = 'https://www.thiranzerptraininginstitute.com/';
  }else if(a==3){
    window.location.href = 'python.html';
  }else if(a==4){
    window.location.href = 'full_stack.html';
  }else if(a==5){
    window.location.href = 'data_science.html';
  }else if(a==6){
    window.location.href = 'data_analytics.html';
  }else if(a==7){
    window.location.href = 'webdesigning.html';
  }else if(a==8){
    window.location.href = 'photoshop.html';
  }else if(a==9){
    window.location.href = 'illustrator.html';
  }else if(a==10){
    window.location.href = 'coreldraw.html';
  }else if(a==11){
    window.location.href = 'animation.html';
  }else if(a==12){
    window.location.href = 'graphic_design.html';
  }else if(a==13){
    window.location.href = 'video_editing.html';
  }else if(a==14){
    window.location.href = 'ui_ux.html';
  }else if(a==15){
    window.location.href = 'software_testing.html';
  }
  else if(a==16){
    window.location.href = 'aws.html';
  }
  else if(a==17){
    window.location.href = 'logistics_and_supply_chain.html';
  }
  
}

//////certificate slider
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


/////course apply onclick section-10
function apply(a){
  var popup = document.querySelector(".crs-popup");
      popup.classList.add("show");
}  
function closecrspopup(){
var pop = document.querySelector(".crs-popup");
pop.style.display = "none";
}

$(document).on('click', '.crs-popup', function(e) {
  // Check if the clicked element is the background (not a child)
  if ($(e.target).hasClass('crs-popup')) {
    // Remove the class from the div's classlist
    $(this).removeClass('show');
  }
});
