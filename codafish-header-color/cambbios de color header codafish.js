var path = location.pathname;

/*PIMCORE CASE*/
if (path.includes('pimcore')){
  
  function locationHashChanged() {
	var headerMenu = document.getElementById('primary-menu').querySelectorAll('a')
	var dots = document.getElementById('fp-nav').querySelectorAll('a');
    if(location.hash === '#codafish-pimcore-agency'){ 
      	for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='black';
          headerMenu[i].style.borderColor='black';
        }
        for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "black", "important")
        }
      }
      else{
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='white';
          headerMenu[i].style.borderColor='white';
        }  
        for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "rgba(255,255,255,0.3)", "important")
        }   
      }
  }
  window.onhashchange = locationHashChanged;
  
/*WORDPRESS CASE*/  
}else if(path.includes('wordpress')){
 
  function locationHashChanged() {
    var headerMenu = document.getElementById('primary-menu').querySelectorAll('a')
	var dots = document.getElementById("fp-nav").querySelectorAll("a");
    if(location.hash === '#advantages'){ 
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='black';
          headerMenu[i].style.borderColor='black';
        }
      	for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "black", "important")
        }
      }
      else{
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='white';
          headerMenu[i].style.borderColor='white';
        }
        for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "rgba(255,255,255,0.3)", "important")
        }   
      }
  }
  window.onhashchange = locationHashChanged;
  
/*DRUPAL CASE*/  
}else if(path.includes('drupal')){
  
  function locationHashChanged() {
    var headerMenu = document.getElementById('primary-menu').querySelectorAll('a')
	var dots = document.getElementById('fp-nav').querySelectorAll('a');
    if(location.hash === '#for-everything' || location.hash === '#powerfull' || location.hash === '#advantages' || location.hash === '#codafish-drupal-agency'){ 
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='black';
          headerMenu[i].style.borderColor='black';
        }
      	for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "black", "important")
        }
      }
      else{
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='white';
          headerMenu[i].style.borderColor='white';
        }
        for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "rgba(255,255,255,0.3)", "important")
        }  
      }
  }
  window.onhashchange = locationHashChanged;
  
/*IONIC CASE*/  
}else if(path.includes('ionic')){
  
  function locationHashChanged() {
    var headerMenu = document.getElementById('primary-menu').querySelectorAll('a')
	var dots = document.getElementById('fp-nav').querySelectorAll('a');
    if(location.hash === '#why-ionic'){ 
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='black';
          headerMenu[i].style.borderColor='black';
        }
      	for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "black", "important")
        }
      }
      else{
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='white';
          headerMenu[i].style.borderColor='white';
        }
        for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "rgba(255,255,255,0.3)", "important")
        }  
      }
  }
  window.onhashchange = locationHashChanged;
  
/*ZOHO CASE*/  
}else if(path.includes('zoho')){
  
  function locationHashChanged() {
    var headerMenu = document.getElementById('primary-menu').querySelectorAll('a')
	var dots = document.getElementById('fp-nav').querySelectorAll('a');
    if(location.hash === '#zoho' || location.hash === '#why-zoho' || location.hash === '#all-in-one' || location.hash === '#why-zoho' || location.hash === '#zoho-users' || location.hash === '#sales-and-crm' || location.hash === '#Accounting' || location.hash === '#why-zoho'){ 
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='black';
          headerMenu[i].style.borderColor='black';
        }
      	for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "rgba(0,0,0,0.8)", "important")
        }
      }
      else{
        for(var i = 0; i < headerMenu.length; i++){
          headerMenu[i].style.color='white';
          headerMenu[i].style.borderColor='white';
        }
        for(var z = 0; z < dots.length; z++){
          dots[z].style.setProperty("background", "rgba(255,255,255,0.3)", "important")
        }  
      }
  }
  window.onhashchange = locationHashChanged;
}