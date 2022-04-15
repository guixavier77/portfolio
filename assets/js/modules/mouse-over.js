export default function initMouseOver(){
  const mouseItem = document.querySelector('[data-mouse]');

  function moveItemOn(){
    const moveItem = document.querySelector('[data-mousemove]');
    moveItem.classList.add('animate');    
  }
  function moveItemOff(){
    const moveItem = document.querySelector('[data-mousemove]');
    moveItem.classList.remove('animate');
  }

  mouseItem.addEventListener("mouseover", moveItemOn);
  mouseItem.addEventListener("mouseout", moveItemOff);
}