const testimonial = [
  {
    name:"Jerry",
    photoURl:"https://www.free-css.com/assets/files/free-css-templates/preview/page278/freefolio/assets/img/testimonial-3.jpg",
    text:"Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita."
  },
  {
    name:"Sara",
    photoURl:"https://www.free-css.com/assets/files/free-css-templates/preview/page278/freefolio/assets/img/testimonial-2.jpg",
    text:"Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita."
  },
  {
    name:"Cristina",
    photoURL:"https://www.free-css.com/assets/files/free-css-templates/preview/page278/freefolio/assets/img/testimonial-1.jpg",
    text:"Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita."
  },
];

const imageEl = document.querySelector("image");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
  const {name, photoURL, text} = testimonial[idx];
  imageEl.src = photoURL;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx == testimonial.length){
    idx = 0;
  }
  setTimeout(()=>{
    updateTestimonial();
  }, 10000);
}
