let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById("passwordInput")
let registerButton = document.getElementById ("createUserButton")
let navbutton = document.querySelectorAll(".nav-bar")
let sellectButton = document.querySelectorAll(".button")



//slide

let products =[
    {
        name: "Koeniggsegg",
        price: 1000.00,
        quantity: 9,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Ram",
        price: 900.00,
        quantity: 8,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Honda",
        price: 700.00,
        quantity: 7,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Kia",
        price: 560.00,
        quantity: 6,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Ford",
        price: 477.00,
        quantity: 5,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Toyota",
        price: 350.00,
        quantity: 4,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Acura",
        price: 880.00,
        quantity: 3,
        image: "https://via.placeholder.com/150",
    }
];
console.log("Products:", products);
function renderProducts() {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h4 class="product-name">${product.name}</h4>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-quantity">Available: ${product.quantity}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}
document.addEventListener("DOMContentLoaded", renderProducts);

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

let dropdowntable = document.querySelector("#account .dropdown");

document.getElementById("account").addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click propagation
    dropdowntable.style.display = dropdowntable.style.display === 'block' ? 'none' : 'block';
});

// Prevent dropdown from closing when clicking inside it
dropdowntable.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest("#account")) {
        dropdowntable.style.display = 'none';
    }
});


registerButton.addEventListener('click', submitNewUser)



///********** SLIDE LOGIC ***************/

const imgPosition = document.querySelectorAll(".aspect-ratio img")
const imgContainer = document.querySelector('.aspect-ratio')
let imgNumber = imgPosition.length
let index = 0
imgPosition.forEach(function(image,index){
    image.style.left= index*100 + "%"
})
function imgSlide(){
    index++;
    console.log(index)
    if(index>= imgNumber) {index =0}
    imgContainer.style.left ="-" + index*100+ "%"
    
}
setInterval(imgSlide, 5000)



// function createProductCard(product) {
    // let productCard = document.createElement("div");
    // productCard.classList.add('product-card');

    // let productImage = document.createElement ('img');
    // productImage.classList.add('product-image');

    // let productName = document.createElement ('h4');
    // productName.textContent = product.name;

    // let productPrice = document.createElement ('p');
    // productPrice.classList.add('product-price');
    // productPrice.textContent = `$${product.price}`;

    // let productQuantity = document.createElement('p');
    // productQuantity.textContent = `Quantity: ${product.quantity}`;

    // let addToCartButton = document.createElement('button');
    // addToCartButton.classList.add('add-to-cart');
    // addToCartButton.textContent = 'Add to Cart';

    // productCard.appendChild(productImage);
    // productCard.appendChild(productName);
    // productCard.appendChild(productPrice);
    // productCard.appendChild(productQuantity);
    // productCard.appendChild(addToCartButton);
    // 
    // return productCard;
// }

// MAKE IT SHOW IN THE PRODUCT CONTAINER 

// function listProduct() {
    // let productContainer = document.getElementById('product-container');
    // productContainer.innerHTML = '';
// 
    // products.forEach(product =>{
        // let productCard = createProductCard(product);
        // productContainer.appendChild(productCard);
    //  }) 
// }