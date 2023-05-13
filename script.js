let menu = document.getElementById('menu'),
    burger = document.getElementById('burger'),
    body = document.getElementsByTagName('body'),
    test = true,
    closer = document.getElementById('close'),
    opener = document.getElementById('open');

burger.onclick = function(){
    if(test == true){
       menu.setAttribute("id", "md"); 
       closer.style.display = "block";
       opener.style.display = "none";
       test = false;
    }
    else if(test == false){
        menu.removeAttribute("id", "md");
        test = true;    
        closer.style.display = "none";
        opener.style.display = "block";
    }
    
}   
const links = document.querySelectorAll('#links');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
