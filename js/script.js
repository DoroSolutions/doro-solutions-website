const slides=[...document.querySelectorAll(".slide")],dots=[...document.querySelectorAll(".pagination button")];let i=0,t;
function show(n){i=(n+slides.length)%slides.length;slides.forEach((s,x)=>s.classList.toggle("active",x===i));dots.forEach((d,x)=>d.classList.toggle("on",x===i))}
function restart(){clearInterval(t);t=setInterval(()=>show(i+1),7000)}
document.querySelector(".next").onclick=()=>{show(i+1);restart()};document.querySelector(".prev").onclick=()=>{show(i-1);restart()};dots.forEach((d,x)=>d.onclick=()=>{show(x);restart()});restart();
document.querySelector(".hamb").onclick=()=>document.querySelector(".site-header nav").classList.toggle("open");
function setLang(l){document.documentElement.lang=l;document.querySelectorAll("[data-en]").forEach(e=>e.innerHTML=e.dataset[l]);document.querySelectorAll(".language button").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));localStorage.setItem("doro-lang",l)}
document.querySelectorAll(".language button").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));setLang(localStorage.getItem("doro-lang")||"en");