import {homePage} from './home'
import {menuPage} from './menu'
import {contactPage} from './contact'

const tabController = (() => {
  
  let buttons = ['home', 'menu', 'contact'];
  let btn = ['','',''];
  
  const getCurrentTab = function() {


  for(let i=0; i<buttons.length; i++) {
    
    btn[i] = document.getElementById(buttons[i]);
    btn[i].addEventListener('click', () => {
      setCurrentTab(btn[i]);
      notCurrentTab(btn[i]);
    });
  }
  const footer = document.getElementById('footer');
  const star = document.createElement('img');
  star.id = "star";
  star.src = "https://o.remove.bg/downloads/7bd5a0fc-4194-440d-989e-7176498a8229/star-removebg-preview.png";
  footer.appendChild(star);
  
  return (btn[0]);
  };

  const setCurrentTab = function(tab) {
    
    const page = document.getElementById('content');
    page.innerHTML = "";
    
    if(tab.id == 'home'){
      homePage.createHomePage();
    }
    else if (tab.id == 'menu'){
      menuPage.createMenuPage();
    }
    else if (tab.id == 'contact'){
      contactPage.createContactPage();
    }
  };
  
  
  const notCurrentTab = function(tab) {
    switch (tab.id) {
      case 'home':
        tab.classList.toggle('buttonSelected');
        btn[1].classList.remove('buttonSelected');
        btn[2].classList.remove('buttonSelected');
        break;
      case 'menu':
        tab.classList.toggle('buttonSelected');
        btn[0].classList.remove('buttonSelected');
        btn[2].classList.remove('buttonSelected');
        break;
      case 'contact':
        tab.classList.toggle('buttonSelected');
        btn[0].classList.remove('buttonSelected');
        btn[1].classList.remove('buttonSelected');
        break;
      
    }
    
  };
  
  
  
    
  return {
    getCurrentTab,
    notCurrentTab
  };
  
})();


export {
  tabController
}


