import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-titulo");
let sliderSubTitle = document.querySelector("#slider-subtitulo");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slider = new Slider({
  elements,
  animationFunc: function(element){

    textContent.classList.add("hide");
    sliderImage.classList.add("hide");

    setTimeout(function(){
      sliderTitle.innerHTML =element.title;
      sliderSubTitle.innerHTML = element.subtitle;
      sliderText.innerHTML = element.text;
      sliderImage.src = element.image;

      textContent.classList.remove("hide");
      sliderImage.classList.remove("hide");

    },600);


  },
  speed: 3000
});

slider.play();

leftArrow.addEventListener('click',slider.prev);
rightArrow.addEventListener('click',slider.next);

const imagePaths = elements.map(el=>el.image);

Preloader.preloadImages({
  images: imagePaths,
  completed: function(){
    document.querySelector(".controls").style.display = "block";
  }
})
