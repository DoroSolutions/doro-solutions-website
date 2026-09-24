document.querySelectorAll('.courses-lang button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const lang=btn.dataset.lang;
    document.querySelectorAll('.courses-lang button').forEach(b=>b.classList.toggle('active',b===btn));
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-en][data-es]').forEach(el=>el.textContent=el.dataset[lang]);
  });
});
document.querySelectorAll('a.disabled').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
