const menuPage = (() => {
  
  const menuItems = [{"name": "banh xeo", "price": "$10", "info": "a crispy pancake filled with shrimp, bean sprouts, and pork and flavored with tumeric"},{"name": "pho bo", "price": "$12", "info": "iconic vietnamese beef soup with special rice noodles, flavorful herbs, and a robust broth"}];
  
  console.log(menuItems[0].price);
  
  const headline = document.createElement('h1');
  headline.innerHTML = "our menu";
  
  const menu = document.createElement('section');
  menu.innerHTML = "fresh foods from Vietnam";
  
  menuItems.forEach((item) => {
    menu.innerHTML += item.price;
  });
  
  const description = document.createElement('section');
  const title = document.createElement('h2');
  title.innerHTML = "We're located at 102 South Clinton Street, Iowa City, Iowa"
  description.appendChild(title);
  
  const waysToContact = document.createElement('ul');
  const number = document.createElement('li');
    number.innerHTML = "CALL: 0987654321"
  const email = document.createElement('li');
    email.innerHTML = "EMAIL: tasteofvietnamIC@gmail.com";
  const facebook = document.createElement('li');
    facebook.innerHTML = "FACEBOOK: fb.com/tasteofvietnamIC";
  
  waysToContact.append(number, email, facebook);


  description.appendChild(waysToContact);
  
  const createMenuPage = () =>
    document.getElementById('content').append(headline, menu, description);
  
    
  return {
    createMenuPage
  };
})();


export {
  menuPage
}


