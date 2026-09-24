const slides=[...document.querySelectorAll(".slide")],pager=[...document.querySelectorAll(".pager button")];let current=0,timer;
function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===current));pager.forEach((b,i)=>b.classList.toggle("on",i===current))}
function reset(){clearInterval(timer);timer=setInterval(()=>show(current+1),7000)}
document.querySelector(".next").onclick=()=>{show(current+1);reset()};document.querySelector(".prev").onclick=()=>{show(current-1);reset()};pager.forEach((b,i)=>b.onclick=()=>{show(i);reset()});reset();
document.querySelector(".hamb").onclick=()=>document.querySelector(".header nav").classList.toggle("open");
function language(l){document.documentElement.lang=l;document.querySelectorAll("[data-en]").forEach(e=>e.innerHTML=e.dataset[l]);document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));localStorage.setItem("doro-language",l)}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>language(b.dataset.lang));language(localStorage.getItem("doro-language")||"en");