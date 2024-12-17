let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById("passwordInput")
let registerButton = document.getElementById("createUserButton")
let navbutton = document.querySelectorAll(".nav-bar")
let sellectButton = document.querySelectorAll(".button")
let dropdowntable = document.querySelector("#account .dropdown");

// Sample products for display (New Arrivals)
let products = [
    {
        id: 1,
        name: "1971 Pontiac GTO Judge",
        price: 10.99,
        quantity: 5,
        rating: 4.9,
        imageUrl: "../../assests/car1.jpg"
    },
    {
        id: 2,
        name: "The Monkeemobile",
        price: 510.99,
        quantity: 5,
        rating: 4.3,
        imageUrl: "../../assests/car2.jpg"
    },
    {
        id: 3,
        name: "Car",
        price: 101.99,
        quantity: 5,
        rating: 4.2,
        imageUrl: "../../assests/car3.jpg"
    },
    {
        id: 4,
        name: "1971 Pontiac GTO Judge",
        price: 120.99,
        quantity: 5,
        rating: 4.0,
        imageUrl: "../../assests/car4.jpg"
    },
    // Add more predefined products as needed...
];

// Function to create a product card
function createProductCard(product) {
    return `
        <div class="card" style="width: 18rem; flex: 0 0 auto;">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">By: ${product.quantity}</p>
                <p class="card-text text-primary fw-bold">$${product.price.toFixed(2)}</p>
                <p class="card-text text-warning">Rating: ⭐${product.rating}</p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    `;
}

//Slide the images on the Home page 
function updateProductDetails(index) {
    // Set product details from the `products` array
    const product = products[index];
    if (product) {
        productTitle.textContent = product.name;
        productDescription.innerHTML = `
            Price: <span class="text-primary fw-bold">$${product.price.toFixed(2)}</span><br>
            Rating: <span class="text-warning">⭐${product.rating}</span><br>
            Quantity: <span>${product.quantity}</span>
        `;
    }
}




// Initialize with the first product details
document.addEventListener("DOMContentLoaded", () => {
    updateProductDetails(0); // Start with the first product
});


// Function to render the current list of products in the "New Arrivals" section
function renderProducts() {
    let productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(createProductCard).join('');
}

// Event listener for the "Add to Inventory" form submission
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload on form submit

    // Get the input values for the new product
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productImage = document.getElementById('product-image').files[0];

    // Validate input values
    if (productName && productPrice && productQuantity && productImage) {
        // Create a new product object and add it to the products array
        const newProduct = {
            id: products.length + 1, // Incremental ID based on length
            title: productName,
            author: "Unknown", // You can add more fields like author if required
            genre: "Unknown", // You can add more fields like genre if required
            price: parseFloat(productPrice),
            rating: 0, // Default rating
            imageUrl: URL.createObjectURL(productImage) // Object URL for the uploaded image
        };

        products.push(newProduct);  // Add the new product to the products array
        renderProducts();  // Re-render the product list

        // Reset the form after submission
        document.getElementById('product-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Initialize by rendering the existing products
document.addEventListener('DOMContentLoaded', renderProducts);

// Navigation handling for the nav buttons
sellectButton.forEach(button => {
    button.addEventListener('click', () => {
        sellectButton.forEach(sellectButton => sellectButton.classList.remove('active'));
        button.classList.add('active');

        let buttonId = button.id;
        switch (buttonId) {
            case 'home':
                window.location.href = 'home.html'; // Navigate to home page
                break;
            case 'contact':
                window.location.href = 'contact.html'; // Navigate to contact page
                break;
            case 'cart':
                window.location.href = 'cart.html'; // Navigate to cart page
                break;
        }
    });
});
