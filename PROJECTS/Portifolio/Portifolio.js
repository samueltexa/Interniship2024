 const register_user_details = (event) => {
    event.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
     // const lastName = document.getElementById("lastName").value;
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    // const confirm_password = document.getElementById("confirmPassword").value;

    let user_data = {};
    const first_name_error_message = document.getElementById("first_name_error_message");
    const last_name_error_message = document.getElementById("last_name_error_message");

    // First name validation
    if (first_name) {
        if (first_name.length >= 3 && first_name.length <= 15) {
            first_name_error_message.innerHTML = "";
            user_data.first_name = first_name;
        } else {
            first_name_error_message.innerHTML = "Invalid name";
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
            last_name_error_message.innerHTML = "Invalid name";
            last_name_error_message.style.color = "red";
        }
    } else {
        last_name_error_message.innerHTML = "Name is required";
        last_name_error_message.style.color = "red";
    }

    user_data = {
        first_name,
        last_name,
    };
    console.log(user_data);
}





        // // lastname validation
        // if (lastName) {
        //     const lastname_error_message = document.getElementById("lastname_error_message");
    
        //     if (lastName.length >= 3 && lastName.length <= 15) {
        //         lastname_error_message.innerHTML = "";
        //         user_data.lastName = lastName;
        //     } else {
        //         lastname_error_message.innerHTML = "Invalid Username";
        //         lastname_error_message.style.color = "red";
        //     }
        // } else {
        //     const lastname_error_message = document.getElementById("lastname_error_message");
        //     lastname_error_message.innerHTML = "last Name is required";
        //     lastname_error_message.style.color = "red";
        // }

    // Password validation
    // const password_error_message = document.getElementById("password_error_message");

    // if (password) {
    //     if (password.length >= 8) {
    //         if (password === confirm_password) {
    //             password_error_message.innerHTML = "";
    //             user_data.password = password;
    //         } else {
    //             password_error_message.innerHTML = "Passwords do not match";
    //             password_error_message.style.color = "red";
    //         }
    //     } else {
    //         password_error_message.innerHTML = "Password must be at least 8 characters long";
    //         password_error_message.style.color = "red";
    //     }
    // }

    // Email validation
    // const email_error_message = document.getElementById("email_error_message");
    // const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // if (email) {
    //     if (email_pattern.test(email)) {
    //         email_error_message.innerHTML = "";
    //         user_data.email = email;
    //     } else {
    //         email_error_message.innerHTML = "Invalid Email Address";
    //         email_error_message.style.color = "red";
    //     }
    // }

    // Log the user data if all validations pass
//     if (Object.keys(user_data).length === 5) {
//         console.log(user_data);
//     } else {
//         console.log("Validation failed");
//     }
//     user_data = {
//         firstName,
//         lastName,
//         password,
//         email,
//     }
//     console.log(user_data);
// };

// const login_user = (event) => {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const loginPassword = document.getElementById("loginPassword").value;

//     let user_data = {};

//     // Username validation
//     if (username) {
//         const username_error_message = document.getElementById("username_error_message");

//         if (username.length >= 3 && username.length <= 15) {
//             username_error_message.innerHTML = "";
//             user_data.username = username;
//         } else {
//             username_error_message.innerHTML = "Invalid Username";
//             username_error_message.style.color = "red";
//         }
//     } else {
//         const username_error_message = document.getElementById("username_error_message");
//         username_error_message.innerHTML = "Username is required";
//         username_error_message.style.color = "red";
//     }

    // Password validation
//     const loginpassword_error_message = document.getElementById("loginpassword_error_message");

//     if (loginPassword) {
//         if (loginPassword.length >= 8) {
//             loginpassword_error_message.innerHTML = "";
//             user_data.loginPassword = loginPassword;
//         } else {
//             loginpassword_error_message.innerHTML = "Password cannot be less than 8 characters";
//             loginpassword_error_message.style.color = "red";
//         }
//     } else {
//         loginpassword_error_message.innerHTML = "Password cannot be empty";
//         loginpassword_error_message.style.color = "red";
//     }

//     // Log the user data if all validations pass and navigate to home
//     if (user_data.username && user_data.loginPassword) {
//         console.log(user_data);
//         window.location.href = "#home";
//     } else {
//         console.log("Validation failed");
//     }
// };


// // JavaScript to close navbar on link click (optional)
// document.querySelectorAll('.navbar-links a').forEach(item => {
//     item.addEventListener('click', () => {
//         document.getElementById('navbar-toggle').checked = false;
//     });
// });
