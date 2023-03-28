const heroSubtitle = document.querySelector('.hero-detail-wrapper .sub-title');
const btnOwner = document.querySelector('.btn.btn-owner');
const productContainer = document.querySelector('.product-wrapper');


   heroSubtitle.textContent = heroSubtitle.textContent.replace(/chair/gi, 'salon');

   btnOwner.addEventListener('click', function(event){
      alert('Owner logged in!')              
   })
 
 //initalizing counter 
 let  clickRecord = {
      unbreakMyBlondeShampoo: 0,
      moistureMeRichShampoo: 0
};

const storageLabel = "matrix_click_record"; 

 //using event deligation to capture targeted product 
productContainer.addEventListener('click', function(event){
  //update counter upon first click
  updateClickRecord(event);
  //incase there is nothing in the localStorage
  if(!localStorage.getItem(storageLabel)){
   localStorage.setItem(storageLabel, JSON.stringify(clickRecord)); 
  }else {
     clickRecord = JSON.parse(localStorage.getItem(storageLabel))
     updateClickRecord(event);
     localStorage.setItem(storageLabel, JSON.stringify(clickRecord));
  }

})


function updateClickRecord(event){
   if(event.target.dataset.product === "unbreak-my-blonde-shampoo"){
       clickRecord.unbreakMyBlondeShampoo += 1;
   }

    if(event.target.dataset.product === "moisture-me-rich-shampoo"){
       clickRecord.moistureMeRichShampoo += 1;
   }
}