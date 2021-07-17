const tabController = (() => {
  
  const getCurrentTab = function() {
  let buttons = ['home', 'menu', 'contact'];

  buttons.forEach(button => {
    var btn = document.getElementById(button);
    
    btn.addEventListener('click', () => {
      setCurrentTab(btn.id);
    });
  
  });
  
  };
  
  const setCurrentTab = function(tab) {
    if(tab == 'home') {
      alert("home");
    }
    else {
      alert("not home");
    }
    
  };
    
  return {
    getCurrentTab
  };
})();


export {
  tabController
}


