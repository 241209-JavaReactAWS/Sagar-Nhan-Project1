let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById("passwordInput")
let registerButton = document.getElementById ("createUserButton")

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
registerButton.addEventListener('click', submitNewUser)

