const log_user_details = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const phone_number = document.getElementById("phone_number").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const email = document.getElementById("email").value;

    let user_data = [];

    // Username validation
    if (username) {
        const username_error_message = document.getElementById("username_error_message");

        if (username.length >= 3 && username.length <= 15) {
            username_error_message.innerHTML = "";
            user_data.username = username;
        } else {
            username_error_message.innerHTML = "Invalid Username";
            username_error_message.style.color = "red";
        }
    } else {
        const username_error_message = document.getElementById("username_error_message");
        username_error_message.innerHTML = "Username is required";
        username_error_message.style.color = "red";
    }

    // Phone number validation
    const phone_number_error_message = document.getElementById("phone_number_error_message");
    const phone_number_pattern = /^[0-9]{10}$/;

    if (phone_number) {
        if (phone_number_pattern.test(phone_number)) {
            phone_number_error_message.innerHTML = "";
            user_data.phone_number = phone_number;
        } else {
            phone_number_error_message.innerHTML = "Invalid Phone Number";
            phone_number_error_message.style.color = "red";
        }
    }

    // Password validation
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
    }

    // Log the user data if all validations pass
    if (Object.keys(user_data).length === 5) {
        console.log(user_data);
    } else {
        console.log("Validation failed");
    }
    user_data = {
        username,
        phone_number,
        date_of_birth,
        password,
        email,
    }
    console.log(user_data);
}
;
// create new user deatils
const create_new_user_in_db = (event) => {
    let usl = "https://registeruser.com/register";
}

if(log_user_details){
    try{
        const response  = fetch(url,{
            method: "POst",
        })

    }catch(err){
        console.log(err);
    }
}