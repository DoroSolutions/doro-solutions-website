const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dots button')];let cur=0,timer;
function show(n){cur=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===cur));dots.forEach((d,i)=>d.classList.toggle('on',i===cur))}
function auto(){clearInterval(timer);timer=setInterval(()=>show(cur+1),6500)}
document.querySelector('.next').onclick=()=>{show(cur+1);auto()};document.querySelector('.prev').onclick=()=>{show(cur-1);auto()};dots.forEach((d,i)=>d.onclick=()=>{show(i);auto()});auto();
document.querySelector('.menu-btn').onclick=()=>document.querySelector('nav').classList.toggle('open');
function lang(l){document.documentElement.lang=l;document.querySelectorAll('[data-en]').forEach(el=>{el.innerHTML=el.dataset[l]});document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));localStorage.setItem('doro-lang',l)}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>lang(b.dataset.lang));lang(localStorage.getItem('doro-lang')||'en');
