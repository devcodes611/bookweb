function loader(){
  document.querySelector('.loader').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

searchform = document.querySelector('.searchform');
document.querySelector('#searchbtn').onclick = () =>{
    searchform.classList.toggle('active');
}

let loginform = document.querySelector('.loginformcontainer');

document.querySelector('#loginbtn').onclick = () =>{
  loginform.classList.toggle('active');
}



document.querySelector('#closeloginbutton').onclick = () =>{
  loginform.classList.remove('active');
}

window.onscroll = () => {

    searchform.classList.remove('active');
    
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.remove('active');
    }

    fadeOut();
}






  var swiper = new Swiper(".bookslider", {
   loop:true,
   centeredslides :true,
   autoplay : {
    display:9500,
    disableOnInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1, 
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featuredslider", {
    spaceBetween: 10,
    loop:true,
    centeredslides :true,
    autoplay : {
     display:9500,
     disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
     },
   });

   var swiper = new Swiper(".arrivalslider", {
    spaceBetween: 10,
    loop:true,
    centeredslides :true,
    autoplay : {
     display:9500,
     disableOnInteraction: false,
    },
   
     breakpoints: {
       0: {
         slidesPerView: 1, 
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });

