const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener('click', function(event) {

   if(event.target.hasAttribute("data-cart")) {
      
      const card = event.target.closest(".card");

      const product__info = {
         imgSrc: card.querySelector(".product__img").getAttribute('src'),
         tittle: card.querySelector(".product__tittle").innerText,
         price: card.querySelector(".product__price").innerText,
         id: card.dataset.id,
      };

      
      
      const productHTML = `
      <div class="product">
            <div class="left">
               <img src="${product__info.imgSrc}">
            </div>
            <div class="right">
               <div class="tittle">
                  <p>${product__info.tittle}</p>
               </div>
                <div class="info-product">
                  <div class="item counter-wrapper">
                     <div class="item__control" data-action="minus"> - </div>
                     <div class="item__counter" data-counter>1</div>
                     <div class="item__control" data-action="plus"> + </div>
                  </div>
                  <div class="item price">
                     <p>${product__info.price}</p>
                  </div>
               </div>
               </div>
            </div>
         </div>`;

         cartWrapper.insertAdjacentHTML('beforeend', productHTML);

   }
});