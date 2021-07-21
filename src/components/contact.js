const contactPage = (() => {
  
  const headline = document.createElement('h1');
  headline.innerHTML = "contact us";
  
  const map = document.createElement('iframe');
  map.src="https://www.google.com/maps/embed/v1/view?zoom=17&center=41.6555%2C-91.5347&key=AIzaSyCqjYtvaGxWMiJu5lOCxMoSkyWaoDTnbvA";
  map.title = 'some title';
  map.frameBorder = 0;
  
  const description = document.createElement('div');
  const title = document.createElement('h2');
  title.innerHTML = "We're located at 102 South Clinton Street, Iowa City, Iowa"
  description.appendChild(title);
  
  const waysToContact = document.createElement('ul');
  
    const iconContainer =document.createElement('div');
    const numIcon = document.createElement('mat-icon');
      numIcon.className = "material-icons";
      numIcon.classList.add("mat-icon")
      numIcon.innerHTML = "&#xe0b0";
      iconContainer.appendChild(numIcon);
    const mailIcon = document.createElement('mat-icon');
      mailIcon.className = "material-icons";
      mailIcon.classList.add("mat-icon");
      mailIcon.innerHTML = "&#xe0be";
      iconContainer.appendChild(mailIcon);
    const fbIcon = document.createElement('mat-icon');
      fbIcon.className = "material-icons";
      fbIcon.classList.add("mat-icon");
      fbIcon.innerHTML = "&#xf234";
      iconContainer.appendChild(fbIcon);
  
  const number = document.createElement('li');
  number.innerHTML = "0987654321"

    const email = document.createElement('li');
    email.innerHTML = "tasteofvietnamIC@gmail.com";
  const facebook = document.createElement('li');
    facebook.innerHTML = "fb.com/tasteofvietnamIC";
  
  waysToContact.append(iconContainer, number, email, facebook);


  description.appendChild(waysToContact);
  
  const createContactPage = () =>
    document.getElementById('content').append(headline, description, map);
  
    
  return {
    createContactPage
  };
})();


export {
  contactPage
}


