    const productImageBase = "./images/";
   

                                    //   [ Approach -- 1 ]"

// adding functionality of Band Color selsection, its dynamic  image  & changing its border color:::
const ringButtons = document.querySelectorAll(".ring-button");

for(let i = 0; i < ringButtons.length; i++){
 
   const ringBtn = ringButtons[i];
   ringBtn.addEventListener('click', function(event){
        
        //taking dynamic button id:::
    const color = event.target.id.replace("-color", ""); // additional color portion removed // also can be done with spread, slice;
        
        // adding toogle functionality of border change on different varient watch
    for(let j = 0; j < ringButtons.length; j++){
        // run loops on all buttons & checking weather anyone have already that puple border, if so remove its class & add gray border
        ringButtons[j].classList.remove('border-purple-600');
        ringButtons[j].classList.add('border-gray-300');
    }
            // after checkup adding purple border to target button/element & remove prev gray border:
    event.target.classList.add('border-purple-600');
    event.target.classList.remove('border-gray-300');

             // adding functionality of changing product image along with band color selsection:::::
     const productImage = document.getElementById('product-image');
     productImage.src = '../images/' + color + '.png';
   });    // result: click on color change & image change:::
};
 
                            //   [ Approach -- 2 ]

// size functionality implement::: 
    function selectWristSize(size){
        const sizes = ["S","M","L","XL"];
        for(let i = 0; i < sizes.length; i++){
            const button = document.getElementById('size-' + sizes[i]);
            const element = sizes[i];
            if(size == element){
                button.classList.add('border-purple-600');
            }else{
                button.classList.remove('border-purple-600')
            };
        };
    };

// ADD to cart  count 

    const quantityElement =  document.querySelectorAll(".quantity-button");
    for(let btn of quantityElement){
        btn.addEventListener('click', function(event){
            const amount = event.target.innerText === '+' ? 1 : -1 ;
            const quantityElement = document.getElementById('quantity');
            const currentQuantity = parseInt(quantityElement.innerText);
            const newQuantity = Math.max(0, currentQuantity + amount );
            quantityElement.innerText = newQuantity;  
        })
    };

// add to cart ---
    let cartCount = 0;
    let cartItems = [];

    document.getElementById('add-to-cart').addEventListener('click', function(e){
    const checkoutContainer = document.getElementById('checkout-container');
    const quantity = parseInt(document.getElementById('quantity').innerText);
        if(quantity > 0 ){
            checkoutContainer.classList.remove('hidden');
            cartCount = cartCount + quantity;
            document.getElementById('cart-count').innerText = cartCount;


            // dynamic info showing on a modal containing all cart adding product info ::::====::::
                const selectedColorButton = document.querySelector('button.border-purple-600.w-6');
                const selectedColor = selectedColorButton.id.split('-')[0];
                const selectedSize = document.querySelector('button.border-purple-600:not(.w-6)').innerText.split(' ')[0];    //Advanced but effective ====
                const selectedPrice =  document.querySelector('button.border-purple-600:not(.w-6)').innerText.split(' ')[1].split('$')[1];

            // now all dynamic element info adding on cart object:::
                cartItems.push({
                    image: selectedColor + ".png",
                    title: 'Classy Modern Smart Watch',
                    color: selectedColor,
                    size: selectedSize,
                    price: quantity * parseInt(selectedPrice)

                });
        }else{
            alert('please select a quantity!!!');
        }; 
    });

// showing dynamic information into a modal :::
document.getElementById('checkout-container').addEventListener('click', function(e){

    const cartModal = document.getElementById('cart-modal');
    const cartContainer = document.getElementById('cart-items');

    for(let i = 0; i < cartItems.length; i++){

        const item = cartItems[i];
        console.log(item);
        
       const row = document.createElement('tr');
       row.classList.add('border-b');
       row.innerHTML = `
            <td>
                <div class="flex flex-row items-center space-x-2>
                    <img class="h-12 w-12 object-cover rounded-sm"  src="${productImageBase}${item.image}" alt=" ">
                    <span class="font-semibold">${item.title}</span>
                </div>
            </td>
       `

       cartContainer.appendChild(row);
    }

    document.getElementById('cart-modal').classList.remove('hidden');
});