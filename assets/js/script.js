function outsideClick(element,events,callback){
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)){
    events.forEach(userEvent =>{
      setTimeout(() =>{
        html.addEventListener(userEvent, handleOutsideClick);
      });
    })
    
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event){
    if(!element.contains(event.target)){
      element.removeAttribute(outside);
      events.forEach(userEvent =>{
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}


function initMenuMobile(){
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click'];
  if(menuButton){
    function openMenu(event){
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList,eventos,()=>{
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    
    }
    
    eventos.forEach((evento)=>{
      menuButton.addEventListener(evento,openMenu);
    });
  }  
}


initMenuMobile();


function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(DistanceFromTheTop){
  window.scroll({
    top: DistanceFromTheTop,
    behavior: "smooth",
  });
}
function scrollToSection(event){
  event.preventDefault();
  const DistanceFromTheTop = getDistanceFromTheTop(event.target);
  nativeScroll(DistanceFromTheTop);
 
}

const menuLinks = document.querySelectorAll('.menu-lista a[href^="#"]');

menuLinks.forEach((link)=>{
  link.addEventListener("click", scrollToSection);
});


