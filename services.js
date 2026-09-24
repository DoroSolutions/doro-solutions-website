document.querySelectorAll(".lang button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const lang=btn.dataset.lang;
    document.documentElement.lang=lang;
    document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active",b===btn));
    document.querySelectorAll("[data-en][data-es]").forEach(el=>{
      const value=el.dataset[lang];
      if(value.includes("\n")) el.innerHTML=value.replace(/\n/g,"<br>");
      else el.textContent=value;
    });
  });
});