const slides=[...document.querySelectorAll(".slide")];
const dots=[...document.querySelectorAll(".slide-dots button")];
let current=0, timer;

function show(i){
  current=(i+slides.length)%slides.length;
  slides.forEach((s,n)=>s.classList.toggle("active",n===current));
  dots.forEach((d,n)=>d.classList.toggle("active",n===current));
}
function autoplay(){
  clearInterval(timer);
  timer=setInterval(()=>show(current+1),6500);
}
document.querySelector(".next").addEventListener("click",()=>{show(current+1);autoplay()});
document.querySelector(".prev").addEventListener("click",()=>{show(current-1);autoplay()});
dots.forEach((d,i)=>d.addEventListener("click",()=>{show(i);autoplay()}));
document.querySelector(".menu-toggle").addEventListener("click",e=>{
  const nav=document.querySelector(".nav");
  nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded",nav.classList.contains("open"));
});
autoplay();
