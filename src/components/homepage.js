const homepage = (() => {
  
  const headline = document.createElement('h1');
  headline.innerHTML = "Welcome to Taste of Vietnam!";
  
  const image = document.createElement('img');
  image.src = "https://massageishealthy.com/wp-content/uploads/2019/06/nguyen-lieu-cach-lam-banh-trang-tron-sai-gon-don-gian-tai-nha-thumb.png";
  
  const description = document.createElement('section');
  const title = document.createElement('h2');
  title.innerHTML = "Try our signature dish, <i> bánh tráng trộn </i>, today"
  description.appendChild(title);
  const text = document.createElement('p');
  text.innerHTML = "If you like foods with a lot of flavors, you'll love our <strong>bánh tráng trộn</strong> (pronounced <i>bang chah-ng ch-own</i>) It's sweet, spicy, savory, and sour all at once! Young mango, tamarind sauce, spicy dried beef, and boiled quail eggs are just a few of the exotic and fresh ingredients you'll find inside every bite. It's surely a not-to-be-missed delicacy from the heart of Vietnam."
  description.appendChild(text);
  
  const createHomepage = () =>
    document.getElementById('content').append(headline, image, description);
  
    
  return {
    createHomepage
  };
})();


export {
  homepage
}


