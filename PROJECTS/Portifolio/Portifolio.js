//  Register user
const register_user_details = (event) => {
    event.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    let user_data = {};
    const first_name_error_message = document.getElementById("first_name_error_message");
    const last_name_error_message = document.getElementById("last_name_error_message");

    // First name validation
    if (first_name) {
        if (first_name.length >= 3 && first_name.length <= 15) {
            first_name_error_message.innerHTML = "";
            user_data.first_name = first_name;
        } else {
            first_name_error_message.innerHTML = "First name too short";
            first_name_error_message.style.color = "red";
        }
    } else {
        first_name_error_message.innerHTML = "Name is required";
        first_name_error_message.style.color = "red";
    }

    // Last name validation
    if (last_name) {
        if (last_name.length >= 3 && last_name.length <= 15) {
            last_name_error_message.innerHTML = "";
            user_data.last_name = last_name;
        } else {
            last_name_error_message.innerHTML = "Last name too short";
            last_name_error_message.style.color = "red";
        }
    } else {
        last_name_error_message.innerHTML = "Name is required";
        last_name_error_message.style.color = "red";
    }

    // Email validation
    const email_error_message = document.getElementById("email_error_message");
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email) {
        if (email_pattern.test(email)) {
            email_error_message.innerHTML = "";
            user_data.email = email;
        } else {
            email_error_message.innerHTML = "Invalid Email Address";
            email_error_message.style.color = "red";
        }
    } else {
        email_error_message.innerHTML = "Email Address is required";
        email_error_message.style.color = "red";
    }

    // Password Validation
    const password_error_message = document.getElementById("password_error_message");
    if (password) {
        if (password.length >= 8) {
            if (password === confirm_password) {
                password_error_message.innerHTML = "";
                user_data.password = password;
            } else {
                password_error_message.innerHTML = "Passwords do not match";
                password_error_message.style.color = "red";
            }
        } else {
            password_error_message.innerHTML = "Password must be at least 8 characters long";
            password_error_message.style.color = "red";
        }
    } else {
        password_error_message.innerHTML = "Password is required";
        password_error_message.style.color = "red";
    }
    user_data = {
        first_name,
        last_name,
        email,
        password,
    };
    // Check if all error messages are empty
    if (first_name_error_message.innerHTML === "" &&
        last_name_error_message.innerHTML === "" &&
        email_error_message.innerHTML === "" &&
        password_error_message.innerHTML === "") {
        // If all validations passed, navigate to home
        alert("Regitsration Successful"); // Replace with your actual home page URL
    }
    // console.log(user_data);
}


// Log in user

const login_user = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const loginPassword = document.getElementById("login_password").value;

    let login_data = {};
    const username_error_message = document.getElementById("username_error_message");
    const login_password_error_message = document.getElementById("login_password_error_message");
    // Username validation
    if (username) {
        if (username.length >= 3 && username.length <= 15) {
            username_error_message.innerHTML = "";
            login_data.username = username;
        } else {
            username_error_message.innerHTML = "User name cannot be too short";
            username_error_message.style.color = "red";
        }
    } else {
        username_error_message.innerHTML = "Username is required";
        username_error_message.style.color = "red";
    }

    // Password validation
    if (loginPassword) {
        if (loginPassword.length >= 8) {
            login_password_error_message.innerHTML = "";
            login_data.loginPassword = loginPassword;
        } else {
            login_password_error_message.innerHTML = "Password cannot be less than 8 characters";
            login_password_error_message.style.color = "red";
        }
    } else {
        login_password_error_message.innerHTML = "Password is required";
        login_password_error_message.style.color = "red";
    }

    login_data = {
        username,
        loginPassword
    };
    // if all error messages are empty navigating to about
    if (username_error_message.innerHTML === "" &&
        login_password_error_message.innerHTML === "") {
        window.location.href = "about.html";
    }
    // console.log(login_data)
}