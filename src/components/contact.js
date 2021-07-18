const contactPage = (() => {
  
  const headline = document.createElement('h1');
  headline.innerHTML = "contact us";
  
  const map = document.createElement('iframe');
  map.src="https://www.google.com/maps/embed/v1/view?zoom=17&center=41.6555%2C-91.5347&key=AIzaSyCqjYtvaGxWMiJu5lOCxMoSkyWaoDTnbvA";
  
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
  
  const createContactPage = () =>
    document.getElementById('content').append(headline, map, description);
  
    
  return {
    createContactPage
  };
})();


export {
  contactPage
}


