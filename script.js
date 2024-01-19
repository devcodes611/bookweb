searchform = document.querySelector('.searchform');
document.querySelector('#searchbtn').onclick = () =>{
    searchform.classList.toggle('active');
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




