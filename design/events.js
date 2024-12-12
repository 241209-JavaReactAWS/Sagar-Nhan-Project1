let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById("passwordInput")
let registerButton = document.getElementById ("createUserButton")
let navbutton = document.querySelectorAll('.nav-bar')
let sellectButton = document.querySelectorAll('.button')

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
            case 'account':
                window.location.href = 'login.html'; // Navigate to account page
                break;
            case 'cart':
                window.location.href = 'cart.html'; // Navigate to cart page
         }
    })
})


registerButton.addEventListener('click', submitNewUser)

