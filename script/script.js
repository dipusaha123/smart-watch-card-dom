const ringButtons = document.querySelectorAll(".ring-button");

let productImageBase  =   "../images/";

for(let i = 0; i< ringButtons.length;i++){
    const ringbtn = ringButtons[i];
    ringbtn.addEventListener('click',function(event){

        const color = event.target.id.replace("-color","");
        

// purple thakle remove kora 

        for(let j = 0; j < ringButtons.length; j++){
           ringButtons[j].classList.remove("border-purple-600");
           ringButtons[j].classList.add("border-gray-300");
           

        }
        //    color add kora    
        event.target.classList.add("border-purple-600");
          event.target.classList.remove("border-gray-300");



          const productImage = document.getElementById("product-image");
           productImage.src = productImageBase + color + ".png";
        
    })
}



function selectWristSize(size){

const sizes = ["S","M","L","XL"];

for (let i=0 ; i < sizes.length;i++){
    const button = document.getElementById ("size-" + sizes[i]);
    const element = sizes[i];
    if(size === element){
        button.classList.add("border-purple-600");
    }else{
         button.classList.remove("border-purple-600");
    }
    
}
}



const quantityelement = document.querySelectorAll(".quantity-button");
for(let btn of quantityelement){
    btn.addEventListener('click',function(event){
        const amount = event.target.innerText === "+" ? 1 : -1;
     
        const quantityElement =document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);
         
        const newquantity = Math.max(0, currentQuantity + amount);
        quantityElement.innerText = newquantity;
    
        
    });
}




// add to card
let cardcaunt = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click",function(){
  
   const quantity = parseInt(document.getElementById("quantity").innerText);

   if(quantity  > 0){

     document.getElementById("checkout-container").classList.remove("hidden");
     cardcaunt = cardcaunt + quantity;
     document.getElementById("cart-count").innerText = cardcaunt;

     const selectcolorButton = document.querySelector("button.border-purple-600.w-6");
     const selectcolor = selectcolorButton.id.split("-")[0];

     const selectsizeButton = document.querySelector("button.border-purple-600:not(.w-6");

     const selectSize = selectsizeButton.innerText.split(" ")[0];
     
     const selectPrice = selectsizeButton.innerText.split(" ")[1].split("$")[1];

   

     cartItems.push({
        image : selectcolor + ".png",
        title : "Classy Modern Smart Watch",
        color : selectcolor,
        size : selectSize,
        quantity:   quantity,
        price : quantity * parseInt(selectPrice)
     });
     console.log(cartItems)
   
     
   

   }else{
    alert("please selected Product")
   }

 
   
})


document.getElementById("checkout-btn").addEventListener('click',function(){
   const cardModal =  document.getElementById("cart-modal")

   const cardContainer = document.getElementById("cart-items");
   for(let i=0; i< cartItems.length; i++){
    const item = cartItems[i];
    const row = document.createElement("tr");
    row.classList.add("border-b");


    row.innerHTML=`

    <td class="py-2 px-4">
    <div class="flex items-center space-x-2 ">
     <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" >
     <span class="font-semibold">${item.title}</span>
    </div>
    </td>
    <td class="py-2 px-4">${item.color}</td>
    <td class="py-2 px-4">${item.size}</td>
    <td class="py-2 px-4">${item.quantity}</td>
    <td class="py-2 px-4">$${item.price}</td>
    
    `;
    cardContainer.appendChild(row);
   }


   cardModal.classList.remove("hidden");


})

document.getElementById("continue-shopping").addEventListener('click',function(){
    document.getElementById("cart-modal").classList.add('hidden')
})
