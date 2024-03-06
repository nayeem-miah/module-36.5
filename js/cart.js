const addProduct= () =>{
    const productField = document.getElementById('product-id');
    const quantityField = document.getElementById('quantity-id');


    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);

    displayShow(product, quantity);
    setProductLocalStorage(product, quantity)
}



const displayShow= (product, quantity) =>{
     const container=  document.getElementById('product-container');

     const li = document.createElement('li');
     li.innerText = `${product} :  ${quantity}`;
     container.appendChild(li);

}

const getStorageShoppingCart = ()=>{
    let cart = {};
    const storeCard = localStorage.getItem('card');
    if(storeCard){
        cart = JSON.parse(storeCard);
    }
    return cart;
}

const setProductLocalStorage = (product, quantity)=>{
    const cart = getStorageShoppingCart();
    cart[product] = quantity;
    console.log(cart);
    const cartStringfied = JSON.stringify(cart);
    console.log(cartStringfied);
    localStorage.setItem('cart', cartStringfied)
}

const displayProductFormStorage= () =>{
    const  savaCard = getStorageShoppingCart();
    console.log(savaCard);
    for(const product in savaCard){
        const quantity = savaCard[product];
        console.log(product, quantity)
        displayShow(product, quantity)
    }
}
displayProductFormStorage();






