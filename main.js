(()=>{"use strict";const e=(()=>{const e=document.createElement("h1");e.innerHTML="Welcome to <i>Taste of Vietnam!</i>";const t=document.createElement("img");t.src="https://massageishealthy.com/wp-content/uploads/2019/06/nguyen-lieu-cach-lam-banh-trang-tron-sai-gon-don-gian-tai-nha-thumb.png";const n=document.createElement("div"),o=document.createElement("h2");o.innerHTML="Try our signature dish, <i> bánh tráng trộn </i>, today",n.appendChild(o);const a=document.createElement("p");return a.innerHTML="If you like foods with a lot of flavors, you'll love our <strong>bánh tráng trộn</strong> (pronounced <i>bang chah-ng ch-own</i>) It's sweet, spicy, savory, and sour all at once! Young mango, tamarind sauce, spicy dried beef, and boiled quail eggs are just a few of the exotic and fresh ingredients you'll find inside every bite. It's surely a not-to-be-missed delicacy from the heart of Vietnam.",n.appendChild(a),{createHomePage:()=>document.getElementById("content").append(e,t,n)}})(),t=(()=>{const e=["dish: ","price: "],t=document.createElement("h1");t.innerHTML="What's cooking at <i>Taste of Vietnam</i>";const n=document.createElement("div");n.classList.add("menu"),n.innerHTML="authentic vietnamese cuisine";const o=document.createElement("section"),a=document.createElement("section"),c=document.createElement("section");return o.innerHTML="</br>"+e[0]+"<strong>bánh xèo<strong></br>",o.innerHTML+="</br>"+e[1]+"<strong>$10<strong></br>",o.innerHTML+="</br><strong>a crispy pancake filled with shrimp, bean sprouts, and pork and flavored with tumeric<strong>",a.innerHTML="</br>"+e[0]+"<strong>phở bò<strong></br>",a.innerHTML+="</br>"+e[1]+"<strong>$12<strong></br>",a.innerHTML+="</br><strong>iconic vietnamese beef soup with special rice noodles, flavorful herbs, and a robust broth<strong>",c.innerHTML="</br>"+e[0]+"<strong>bánh tráng trộn<strong></br>",c.innerHTML+="</br>"+e[1]+"<strong>$8<strong></br>",c.innerHTML+="</br><strong>a delicious snack full of many complementary flavors<strong>",n.append(o,a,c),{createMenuPage:()=>document.getElementById("content").append(t,n)}})(),n=(()=>{const e=document.createElement("h1");e.innerHTML="contact us";const t=document.createElement("iframe");t.src="https://www.google.com/maps/embed/v1/view?zoom=17&center=41.6555%2C-91.5347&key=AIzaSyCqjYtvaGxWMiJu5lOCxMoSkyWaoDTnbvA";const n=document.createElement("div"),o=document.createElement("h2");o.innerHTML="We're located at 102 South Clinton Street, Iowa City, Iowa",n.appendChild(o);const a=document.createElement("ul"),c=document.createElement("mat-icon");c.className="material-icons",c.classList.add("mat-icon"),c.innerHTML="&#xe0b0",n.appendChild(c);const r=document.createElement("mat-icon");r.className="material-icons",r.classList.add("mat-icon"),r.innerHTML="&#xe0be",n.appendChild(r);const s=document.createElement("mat-icon");s.className="material-icons",s.classList.add("mat-icon"),s.innerHTML="&#xf234",n.appendChild(s);const i=document.createElement("li");i.innerHTML="0987654321";const m=document.createElement("li");m.innerHTML="tasteofvietnamIC@gmail.com";const d=document.createElement("li");return d.innerHTML="fb.com/tasteofvietnamIC",a.append(i,m,d),n.appendChild(a),{createContactPage:()=>document.getElementById("content").append(e,t,n)}})(),o=(()=>{let o=["home","menu","contact"],a=["","",""];const c=function(e){switch(e.id){case"home":e.classList.toggle("buttonSelected"),a[1].classList.remove("buttonSelected"),a[2].classList.remove("buttonSelected");break;case"menu":e.classList.toggle("buttonSelected"),a[0].classList.remove("buttonSelected"),a[2].classList.remove("buttonSelected");break;case"contact":e.classList.toggle("buttonSelected"),a[0].classList.remove("buttonSelected"),a[1].classList.remove("buttonSelected")}};return{getCurrentTab:function(){for(let r=0;r<o.length;r++)a[r]=document.getElementById(o[r]),a[r].addEventListener("click",(()=>{var o;o=a[r],document.getElementById("content").innerHTML="","home"==o.id?e.createHomePage():"menu"==o.id?t.createMenuPage():"contact"==o.id&&n.createContactPage(),c(a[r])}));const r=document.getElementById("footer"),s=document.createElement("img");return s.id="star",s.src="https://o.remove.bg/downloads/7bd5a0fc-4194-440d-989e-7176498a8229/star-removebg-preview.png",r.appendChild(s),a[0]},notCurrentTab:c}})();e.createHomePage();const a=o.getCurrentTab();o.notCurrentTab(a)})();