document.querySelectorAll(".lang button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const lang=btn.dataset.lang;
    document.documentElement.lang=lang;
    document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active",b===btn));
    document.querySelectorAll("[data-en][data-es]").forEach(el=>el.textContent=el.dataset[lang]);
  });
});
document.querySelectorAll(".buy").forEach(a=>a.addEventListener("click",e=>e.preventDefault()));