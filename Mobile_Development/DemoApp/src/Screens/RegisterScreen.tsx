// import { ScrollView, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'

// export default function RegisterScreen() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [companyName, setCompanyName] = useState('');
//     const [companyId, setCompanyId] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setComfirmPassword] = useState('');
//     const [firstNameError, setFirstNameError] = useState('');
//     const [lastNameError, setLastNameError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [phoneNumberError, setPhoneNumberError] = useState('');
//     const [companyNameError, setCompanyNameError] = useState('');
//     const [companyIdError, setCompanyIdError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');

//     const handleRegistration = () => {
//         if(firstName){
//             setFirstNameError('');
//             if(firstName.length < 3){
//                 setFirstNameError('First name is too short');
//             }
//         }else{
//             setFirstNameError('Enter first name');
//         };
//         if(lastName){
//             setLastNameError('');
//             if(lastName.length < 3){
//                 setLastNameError('Last name is too short');
//             }
//         }else{
//             setLastNameError('Enter last name');
//         };
//         if(email){
//             setEmailError('');
//             if(!email.includes('@')){
//                 setEmailError('Invalid email');
//             }
//         }else{
//             setEmailError('Enter email');
//         };
//         if (phoneNumber) {
//             setPhoneNumberError('');
//             // Check if phoneNumber consists only of digits
//             if (!/^\d+$/.test(phoneNumber)) {
//                 setPhoneNumberError('Phone number must contain only digits');
//             } else if (phoneNumber.length !== 10) {
//                 setPhoneNumberError('Phone number must be exactly 10 digits');
//             }
//         } else {
//             setPhoneNumberError('Enter phone number');
//         };
//         if(companyName){
//             setCompanyNameError('');
//             if(companyName.length < 3){
//                 setCompanyNameError('Company name is too short');
//             }
//         }else{
//             setCompanyNameError('Enter company name');
//         };

//         if (companyId) {
//             setCompanyIdError('');
//             if (!/^\d+$/.test(companyId)) {
//                 setCompanyIdError('Company ID must contain only digits');
//             } else if (companyId.length !== 4) {
//                 setCompanyIdError('Company ID must be exactly 4 digits');
//             }
//         } else {
//             setCompanyIdError('Enter company id');
//         };
//         if(password){
//             setPasswordError('');
//             if(password.length < 6){
//                 setPasswordError('Password is too short');
//             };
//         }else{
//             setPasswordError('Enter password');
//         };
//         if(confirmPassword){
//             setConfirmPasswordError('');
//             if(confirmPassword !== password){
//                 setConfirmPasswordError('Passwords do not match');
//             };
//         }else{
//             setConfirmPasswordError('Enter confirm password');
//         };
//         if(firstName && lastName && email && phoneNumber && companyName && companyId && password && confirmPassword){
//             Alert.alert('Registration successful');
//         };
//         const user_details = [firstName, lastName, email, phoneNumber, companyName, companyId, password, confirmPassword];
//         console.log(user_details);
//     };
//     return (
//         <ScrollView style = {styles.page_wrapper}>
//             <Text style = {styles.register_text}>Register from here</Text>
//             <TextInput value = {firstName} onChangeText={setFirstName} style={styles.input_text_wrapper } placeholder='Enter first name'>
//             </TextInput>
//             {firstNameError ? <Text style={styles.error_text}>{firstNameError}</Text> : null}
//             <TextInput value = {lastName} onChangeText={setLastName} style={styles.input_text_wrapper} placeholder='Enter last name'/>
//             {lastNameError ? <Text style={styles.error_text}>{lastNameError}</Text> : null}
//             <TextInput value = {email} onChangeText={setEmail} style={styles.input_text_wrapper} placeholder='Enter email'/>
//             {emailError ? <Text style={styles.error_text}>{emailError}</Text> : null}
//             <TextInput value = {phoneNumber} onChangeText={setPhoneNumber} style={styles.input_text_wrapper} placeholder='Enter phone number'/>
//             {phoneNumberError ? <Text style={styles.error_text}>{phoneNumberError}</Text> : null}
//             <TextInput value={companyName} onChangeText={setCompanyName} style={styles.input_text_wrapper} placeholder='Enter company name'/>
//             {companyNameError ? <Text style={styles.error_text}>{companyNameError}</Text> : null}
//             <TextInput value={companyId} onChangeText={setCompanyId} style={styles.input_text_wrapper} placeholder='Enter company id'/>
//             {companyIdError ? <Text style={styles.error_text}>{companyIdError}</Text> : null}
//             <TextInput value={password} onChangeText={setPassword} style={styles.input_text_wrapper} placeholder='Enter password' secureTextEntry/>
//             {passwordError ? <Text style={styles.error_text}>{passwordError}</Text> : null}
//             <TextInput value={confirmPassword} onChangeText={setComfirmPassword} style={styles.input_text_wrapper} placeholder='Confirm password' secureTextEntry/>
//             {confirmPasswordError ? <Text style={styles.error_text}>{confirmPasswordError}</Text> : null}
//             <TouchableOpacity style={styles.button} onPress={handleRegistration}>
//                 <Text style={styles.button_text}>Register</Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     input_text_wrapper:{
//         borderColor: 'black',
//         backgroundColor: 'gray',
//         borderWidth: 1,
//         width: '95%',
//         borderRadius: 10,
//         alignSelf: 'center',
//         marginTop: 20,
//     },
//     page_wrapper:{
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'lightgray',
//     },
//     register_text:{
//         marginTop: 10,
//         fontSize: 30,
//         color: 'green',
//         textAlign: 'center',
//     },
//     button:{
//         backgroundColor: 'green',
//         width: '95%',
//         padding: 10,
//         borderRadius: 10,
//         alignItems: 'center',
//         alignSelf: 'center',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     button_text:{
//         color: 'white',
//         fontSize: 20,
//     },
//     error_text: {
//         alignSelf: 'flex-start',
//         marginLeft: '5%',
//         color: 'red',
//         fontSize: 14,
//     },
// });