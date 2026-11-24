(() => {
  const $=(s)=>document.querySelector(s), $$=(s)=>[...document.querySelectorAll(s)];
  const menu=$('.menu-icon'), panel=$('.fullscreen-menu');
  function setMenu(open){menu.classList.toggle('active',open);panel.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');}
  if(menu&&panel){menu.addEventListener('click',()=>setMenu(!panel.classList.contains('open')));menu.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();menu.click();}});document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false);});panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});}
  const slides=$$('.villa-slide'); let index=0;
  function show(n){index=(n+slides.length)%slides.length;slides.forEach((el,i)=>{el.style.display=i===index?'block':'none';});const item=window.znzSlides?.[index];if(item){$('#villaTitle').textContent=item.title;$('#villaDescription').textContent=item.desc;}}
  if(slides.length){window.changeSlide=n=>show(index+n);show(0);let timer;if(!matchMedia('(prefers-reduced-motion:reduce)').matches){const start=()=>{clearInterval(timer);timer=setInterval(()=>{if(!document.hidden)show(index+1);},10000);};start();$('.villa-wrapper').addEventListener('mouseenter',()=>clearInterval(timer));$('.villa-wrapper').addEventListener('mouseleave',start);$('.villa-wrapper').addEventListener('focusin',()=>clearInterval(timer));$('.villa-wrapper').addEventListener('focusout',start);}}
  const cards=$$('.cube-face'), popup=$('#hexagonBox');
  if(popup){
    const title=$('#boxTitle'), desc=$('#boxDesc'), closeBtn=$('#closeBtn');
    let active=null;
    function close(){popup.hidden=true;cards.forEach(c=>c.setAttribute('aria-expanded','false'));if(active)active.focus({preventScroll:true});active=null;}
    cards.forEach(c=>c.addEventListener('click',()=>{
      active=c;title.textContent=c.dataset.title;desc.textContent=c.dataset.desc;
      cards.forEach(x=>x.setAttribute('aria-expanded',String(x===c)));
      popup.hidden=false;closeBtn.hidden=false;
      popup.scrollIntoView({block:'nearest',behavior:'auto'});
    }));
    closeBtn.addEventListener('click',close);
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&active&&!popup.hidden)close();});
  }
  const more=$('.site-about .about-content .cta-button');if(more){more.addEventListener('click',()=>{$('#about-more').classList.remove('hide');more.setAttribute('aria-expanded','true');more.classList.add('hide');});}
  const v=$('#myVideo'), overlay=$('.video-overlay2'), play=$('.play-button-container');if(v&&overlay&&play){play.addEventListener('click',()=>v.play().catch(()=>{overlay.hidden=true;}));v.addEventListener('play',()=>{overlay.hidden=true;});v.addEventListener('ended',()=>{overlay.hidden=false;});}
  // The original form did not have a server endpoint. Open the visitor's email app instead of claiming a message was sent.
  const form=$('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const name=$('#name').value,email=$('#email').value,msg=$('#message').value;let status=$('.form-status');if(!status){status=document.createElement('p');status.className='form-status';status.setAttribute('role','status');form.append(status);}status.textContent='Your email app will open with your message. Please send it there to complete your inquiry.';location.href='mailto:info@znzdevelopers.com?subject='+encodeURIComponent('Website inquiry from '+name)+'&body='+encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg);});}
})();
