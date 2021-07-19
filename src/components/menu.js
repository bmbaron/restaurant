const menuPage = (() => {
  
  const item1 = {"name": "bánh xèo", "price": "$10", "info": "a crispy pancake filled with shrimp, bean sprouts, and pork and flavored with tumeric"};
  const item2 = {"name": "phở bò", "price": "$12", "info": "iconic vietnamese beef soup with special rice noodles, flavorful herbs, and a robust broth"};
  const item3 = {"name": "bánh tráng trộn", "price": "$8", "info": "a delicious snack full of many complementary flavors"};
  const keyNames = ["dish: ", "price: "];

  const headline = document.createElement('h1');
  headline.innerHTML = "What's cooking at <i>Taste of Vietnam</i>";
  
  const menu = document.createElement('div');
  menu.classList.add("menu");
  menu.innerHTML = "authentic vietnamese cuisine";
  
  const section1 = document.createElement('section');
  const section2 = document.createElement('section');
  const section3 = document.createElement('section');


  section1.innerHTML = "</br>" + keyNames[0] + "<strong>" + item1.name + "<strong>" + "</br>";
  section1.innerHTML += "</br>" + keyNames[1] + "<strong>" + item1.price + "<strong>" + "</br>";
  section1.innerHTML += "</br>" + "<strong>" + item1.info + "<strong>";

  section2.innerHTML = "</br>" + keyNames[0] + "<strong>" + item2.name + "<strong>" + "</br>";
  section2.innerHTML += "</br>" + keyNames[1] + "<strong>" + item2.price + "<strong>" + "</br>";
  section2.innerHTML += "</br>" + "<strong>" + item2.info + "<strong>";
  
  section3.innerHTML = "</br>" + keyNames[0] + "<strong>" + item3.name + "<strong>" + "</br>";
  section3.innerHTML += "</br>" + keyNames[1] + "<strong>" + item3.price + "<strong>" + "</br>";
  section3.innerHTML += "</br>" + "<strong>" + item3.info + "<strong>";
  
  menu.append(section1, section2, section3);

  
  const createMenuPage = () =>
    document.getElementById('content').append(headline, menu);
  
    
  return {
    createMenuPage
  };
})();


export {
  menuPage
}


