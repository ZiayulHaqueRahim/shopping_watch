                           //   [ Approach -- 1 ]

// adding functionality of Band Color selsection, its dynamic  image  & changing its border color:::
const ringButtons = document.querySelectorAll(".ring-button");

for(let i = 0; i < ringButtons.length; i++){
 
   const ringBtn = ringButtons[i];
   ringBtn.addEventListener('click', function(event){
        
        //taking dynamic button id:::
    const color = event.target.id.replace("-color", ""); // additional color portion removed // also can be done with spread, slice;
    console.log(color);
    
        
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
            }  
        }
    }