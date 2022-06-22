// for search bar
let searchForm = document.querySelector(".form-search");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

//for login
let loginForm = document.querySelector(".for-login");
document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    menu.classList.remove('active');
}     

//for menu button
let menu = document.querySelector(".menu");
document.querySelector("#menu-btn").onclick = () => {
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

//for categories slider
var swiper = new Swiper(".categ-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
     delay: 7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
});


//for video slider
var swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
   delay: 7500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 1,
      
    },
    1020: {
      slidesPerView: 1,
      
    },
  },
});


//for read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";
    }
  } 

  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";
    }
  } 

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";
    }
  } 

  var mybutton= document.getElementById("mybtn");
		window.onscroll = function() {
			scrollFunction()
				};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
				mybutton.style.display = "block";
				}
			else{
				mybutton.style.display = "none";	
				}
				}

			function topFunction() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
				};