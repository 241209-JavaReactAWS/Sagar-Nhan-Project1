let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById("passwordInput")
let registerButton = document.getElementById ("createUserButton")
let navbutton = document.querySelectorAll(".nav-bar")
let sellectButton = document.querySelectorAll(".button")

let dropdowntable = document.querySelector("#account .dropdown");
// Create a function that we expect to be called when the button is clicked
function submitNewUser(){

    // Grab the current value from the usernameInput and passwordInput
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;

    //* Create an object to hold the info for this user

    let user = {
        username: usernameValue,
        password: passwordValue

    }
    //  this sends an HTTP request 
    console.log(user)

}

function removeActive(){
    sellectButton.forEach(sellectButton => sellectButton.classList.remove('active'));
}
sellectButton.forEach(button => {
    button.addEventListener('click', () => {
        removeActive();
        button.classList.add('active');

        let buttonId = button.id;
         switch (buttonId) {
            case 'home':
                window.location.href = 'home.html'; // Navigate to home page
                break;
            case 'contact':
                window.location.href = 'contact.html'; // Navigate to contact page
                break;
            // case 'account':
                // window.location.href = 'login.html'; // Navigate to account page
                // break;
            case 'cart':
                window.location.href = 'cart.html'; // Navigate to cart page
         }
    })
})



// DROPDOWN LOGIN
document.getElementById("account").addEventListener('click', function(event){
    event.stopPropagation();
    dropdowntable.style.display = dropdowntable.style.display === 'block' ? 'none': 'block';
});

// PRevent DROPDOWN CLOSE
dropdowntable.addEventListener('click', function(event){
    event.stopPropagation();
});
document.addEventListener("click", function(e){
    if (!e.target.closest("account")) {
        dropdown.style.display = 'none';
    }
});
registerButton.addEventListener('click', submitNewUser)


// CREATE NEW PRODUCT 
let products =[];

function createProductCard(product) {
    let productCard = document.createElement("div");
    productCard.classList.add('product-card');

    let productImage = document.createElement ('img');
    productImage.classList.add('product-image');

    let productName = document.createElement ('h4');
    productName.textContent = product.name;

    let productPrice = document.createElement ('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${product.price}`;

    let productQuantity = document.createElement('p');
    productQuantity.textContent = `Quantity: ${product.quantity}`;

    let addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.textContent = 'Add to Cart';

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productQuantity);
    productCard.appendChild(addToCartButton);
    
    return productCard;
}

// MAKE IT SHOW IN THE PRODUCT CONTAINER 

function listProduct() {
    let productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product =>{
        let productCard = createProductCard(product);
        productContainer.appendChild(productCard);
     }) 
}