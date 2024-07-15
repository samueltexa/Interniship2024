// import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import { userNameValidation } from '../utilityFunctions/validation/userNameValidation'
// import { passwordValidation } from '../utilityFunctions/validation/passwordValidation'

// const LoginScreen = () => {
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [userNameError, setUserNameError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleLogin = () => {
//         const isUserNameValid = userNameValidation(userName);
//         const isPasswordValid = passwordValidation(password);
//         setUserNameError(isUserNameValid ? '' : 'User Name must');
//         setPasswordError(isPasswordValid ? '' : 'Too short');

//         if (userNameValidation(userName) && passwordValidation(password)) {

//         }
//         const userdata = [
//             userName,
//             password
//         ]
//         console.log(userdata);
//     }

//     return (
//         <View style={styles.input_wrapper}>
//             <Image source={require('../assets/images/img.jpg')} style={{ width: 250, height: 250, borderRadius: 120}} />
//             <Text style={styles.login}>Login From Here</Text>
//             <TextInput value={userName} onChangeText={setUserName} style={styles.usernames} placeholder='Enter username' placeholderTextColor='#777'>
//             </TextInput>
//             {userNameError && <Text style={styles.error}>{userNameError}</Text>}
//             <TextInput value={password} onChangeText={setPassword} style={styles.password} placeholder='Enter Password' placeholderTextColor='#777' secureTextEntry>
//             </TextInput>
//             {passwordError && <Text style={styles.error}>{passwordError}</Text>}
//             <TouchableOpacity onPress={handleLogin} style={styles.signinButton}>
//                 <Text style={styles.buttonText}>SigIn</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//     login: {
//         fontSize: 20,
//         color: '#333',
//     },
//     input_wrapper: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'gray',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 15,
//     },
//     usernames: {
//         borderColor: '#333',
//         color: '#222',
//         borderWidth: 1,
//         width: '80%',
//         borderRadius: 10,
//     },
//     error:{
//         color:'red',
//         alignSelf: 'flex-start',
//         marginLeft: '10%'
//     },
//     password: {
//         marginTop: 10,
//         borderWidth: 1,
//         width: '80%',
//         borderRadius: 10,

//     },
//     signinButton: {
//         backgroundColor: 'blue',
//         width: '80%',
//         height: 40,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 10,
//     },
//     buttonText: {
//         color: "white",

//     },
// });