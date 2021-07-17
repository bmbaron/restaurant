const tabController = (() => {
  
  
  const setButtons = function() {
  const buttons = ['home', 'menu', 'contact'];
  buttons.forEach(button => {
    var btn = getElementById(button);
    btn.value = "ok";
    
  });
  
  };
  

  const getCurrentTab = () =>
    alert('hello');
  
    
  return {
    setButtons,
    getCurrentTab
  };
})();


export {
  tabController
}


