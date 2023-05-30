
$(function (){

  // Theme Feature start
  let dark_light = document.querySelector(".dark_light");
  let body = document.querySelector("body");


  dark_light.addEventListener("click", function(){
    body.classList.toggle("dark")
  
  })
  // Theme Feature end
  
// nav bar start

let nav = document.querySelector("#navbar")

window.addEventListener("scroll", function(){
  let scroll_value = Math.floor(window.scrollY);
  
  if (scroll_value > 150) {
    nav.classList.add("sticky_menu")
    
  }
  else{
    nav.classList.remove("sticky_menu")
    
  }

})
// nav bar end

// to top part start

let totop = document.querySelector(".to_top span")

window.addEventListener("scroll", function(){
  let scroll_value = Math.floor(window.scrollY);
  
  if (scroll_value > 180) {
    totop.classList.add("back_totop")
    
  }
  else{
    totop.classList.remove("back_totop")
    
  }

})
// to top part end



// top collection part start
// All Reference start
const small_imageArray = Array.from(document.querySelectorAll(".small_image ul li"));
const display_imageArray = Array.from(document.querySelectorAll(".display_image img"));
const colorsArray = Array.from(document.querySelectorAll(".colors span"));
// All Reference end


small_imageArray.map((item, index)=> {
   item.addEventListener("mouseenter", (e)=> {
  
  

    // catch all thumbnail image
    let allListArr = Array.from(item.parentElement.querySelectorAll("li"));
    allListArr.map((small_image)=> {
      small_image.classList.remove("active");
    });
    
    // catch all Circle color
    let colors = Array.from(item.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".dress_type .colors span"));
    colors.map((item) => {
      item.classList.remove("active")
    })
    

    // Catch all Display images
    let parentDiv = display_imageArray[index].parentElement;
    let displayImages = parentDiv.querySelectorAll("img");
    let displayImgArr = Array.from(displayImages);
    displayImgArr.map((img) => {
        img.classList.remove("active");
        
    })

    // Active class add
    small_imageArray[index].classList.add("active")
    display_imageArray[index].classList.add("active")
    colorsArray[index].classList.add("active")


   })
})

// Colors circle eventListener
colorsArray.map((color, index) => {
  color.addEventListener("click", () => {
    // catch all display image
    let displayImages = color.parentElement.parentElement.parentElement;
    let img =  Array.from(displayImages.querySelectorAll(".model_image .display_image img"))
    img.map(item => {
      item.classList.remove("active")
    })
    // catch all thumbnail image
    let thumbnailImages = color.parentElement.parentElement.parentElement;
    let thumb =  Array.from(thumbnailImages.querySelectorAll(".model_image .small_image li"))
    console.log( thumbnailImages);
    thumb.map(item => {
      item.classList.remove("active")
    })

    // catch all circle color
    let parentCircle = color.parentElement;
    let allColorCircle = parentCircle.querySelectorAll("span");
    let allColorCircleArr = Array.from(allColorCircle);
    allColorCircleArr.map((item) => {
      item.classList.remove("active")
    })

    // Active class add
    small_imageArray[index].classList.add("active")
    display_imageArray[index].classList.add("active")
    colorsArray[index].classList.add("active")
  })
})

$('.topCollection_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4 ,
  arrows: false,
  draggable: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]


});

// top collection part end

// exclusive part start
const special_menu = document.querySelectorAll( ".special_menu button");
const filter_gallery = document.querySelectorAll( ".filter_gallery .filter");


const special_menuArry = Array.from(special_menu);
const filter_galleryArry = Array.from(filter_gallery);

special_menuArry.map((menu_item, index) =>{
  menu_item.addEventListener("click", (e) => {

    special_menuArry.map((remove_class) =>{
      remove_class.classList.remove("active")
    })


    filter_galleryArry.map((item) =>{
      item.classList.remove("active")
    })

    filter_galleryArry[index].classList.add("active");
    special_menuArry[index].classList.add("active");
  

    })

  })

// exclusive part end

// blog slider start

$('.blog_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  draggable: true,
  centerPadding: '0px',

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

});

$('.slide_icon').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  draggable: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    
  ]

});
// blog slider start

// related new product slider start

$('.new_product_slider').slick({
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'.new_arrows .fa-chevron-left',
  nextArrow:'.new_arrows .fa-chevron-right',
  draggable: true,
});

$('.small_image_slider').slick({
  slidesToShow: 1,
  arrows:false,
  slidesToScroll: 2,
  draggable: true,
});

$('.display_image_slider').slick({
  slidesToShow: 1,
  arrows:false,
  slidesToScroll: 2,
  draggable: true,
});
// related new product slider end


// dress stock part start

// let leftIcon = document.querySelector(".left_icon i")
// let input = document.querySelector("input")
// let righttIcon = document.querySelector(".right_icon i")

// let i = 0

// dress stock part end






})







AOS.init();