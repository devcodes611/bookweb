searchform = document.querySelector('.searchform');
document.querySelector('#searchbtn').onclick = () =>{
    searchform.classList.toggle('active');
}

let loginform = document.querySelector('.loginformcontainer');

document.querySelector('#userbtn').onclick = () =>{
  loginform.classList.toggle('act');
}


document.querySelector('#closeloginbutton').onclick = () =>{
  loginform.classList.remove('act');
}

window.onscroll = () => {

    searchform.classList.toggle('active');
    
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
        450: {
          slidesPerView: 2,
        },
       },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
     },
   });


