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


// // DROPDOWN LOGIN
// document.getElementById("account").addEventListener('click', function(event){
//     event.stopPropagation();
//     dropdowntable.style.display = dropdowntable.style.display === 'block' ? 'none': 'block';
// });

// // PRevent DROPDOWN CLOSE
// dropdowntable.addEventListener('click', function(event){
//     event.stopPropagation();
// });
// document.addEventListener("click", function(e){
//     if (!e.target.closest("account")) {
//         dropdown.style.display = 'none';
//     }
// });
// registerButton.addEventListener('click', submitNewUser)









let products = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 10.99,
        rating: 4.8,
        imageUrl: "./assets/TheGreatGatsby.jpg"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        price: 12.99,
        rating: 4.9,
        imageUrl: "../assets/book-cover-To-Kill-a-Mockingbird-many-1961.webp"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        price: 9.99,
        rating: 4.7,
        imageUrl: "https://example.com/images/1984.jpg"
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophy",
        price: 11.49,
        rating: 4.6,
        imageUrl: "https://example.com/images/the-alchemist.jpg"
    },
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99,
        rating: 4.9,
        imageUrl: "https://example.com/images/harry-potter-sorcerer-stone.jpg"
    }
];

function createBookCard(product) {
    return `
        <div class="card" style="width: 18rem; flex: 0 0 auto;">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">By: ${product.author}</p>
                <p class="card-text text-primary fw-bold">$${product.price.toFixed(2)}</p>
                <p class="card-text text-warning">Rating: ⭐${product.rating}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    `;
}

function renderBooks() {
    console.log("Rendering books...");

    let productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(createBookCard).join('');
}

// Ensure the function is called on DOM load
document.addEventListener('DOMContentLoaded', renderBooks);




// // CREATE NEW PRODUCT 
// let products = [
//     {
//       id: 1,
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       genre: "Classic",
//       price: 10.99,
//       rating: 4.8,
//       imageUrl: "https://example.com/images/great-gatsby.jpg"
//     },
//     {
//       id: 2,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       genre: "Fiction",
//       price: 12.99,
//       rating: 4.9,
//       imageUrl: "https://example.com/images/to-kill-a-mockingbird.jpg"
//     },
//     {
//       id: 3,
//       title: "1984",
//       author: "George Orwell",
//       genre: "Dystopian",
//       price: 9.99,
//       rating: 4.7,
//       imageUrl: "https://example.com/images/1984.jpg"
//     },
//     {
//       id: 4,
//       title: "The Alchemist",
//       author: "Paulo Coelho",
//       genre: "Philosophy",
//       price: 11.49,
//       rating: 4.6,
//       imageUrl: "https://example.com/images/the-alchemist.jpg"
//     },
//     {
//       id: 5,
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: "J.K. Rowling",
//       genre: "Fantasy",
//       price: 14.99,
//       rating: 4.9,
//       imageUrl: "https://example.com/images/harry-potter-sorcerer-stone.jpg"
//     }
//   ];

// function createProductCard(product) {
//     let productCard = document.createElement("div");
//     productCard.classList.add('product-card');

//     let productImage = document.createElement ('img');
//     productImage.classList.add('product-image');

//     let productName = document.createElement ('h4');
//     productName.textContent = product.title;

//     let productPrice = document.createElement ('p');
//     productPrice.classList.add('product-price');
//     productPrice.textContent = `$${product.price}`;

//     let productQuantity = document.createElement('p');
//     productQuantity.textContent = `Quantity: ${product.quantity}`;

//     let addToCartButton = document.createElement('button');
//     addToCartButton.classList.add('add-to-cart');
//     addToCartButton.textContent = 'Add to Cart';

//     productCard.appendChild(productImage);
//     productCard.appendChild(productName);
//     productCard.appendChild(productPrice);
//     productCard.appendChild(productQuantity);
//     productCard.appendChild(addToCartButton);
    
//     return productCard;
// }

// // MAKE IT SHOW IN THE PRODUCT CONTAINER 

// function listProduct() {
//     let productContainer = document.getElementById('product-container');
//     productContainer.innerHTML = ``;

//     products.forEach(product =>{
//         let productCard = createProductCard(product);
//         productContainer.appendChild(productCard);
//      }) 
// }