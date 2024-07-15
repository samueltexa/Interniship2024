import { Alert } from "react-native";
export const passwordValidation = (password: string, confirmPassword?: string) => {
    // check if the password is empty
    if (!password) {
        console.log('Password is required');
        // Alert.alert('Password is required');
        return false;
        // Update error message

        // check if the password is less than 6 characters or more
    } if (!(password.length >= 6 && password.length <= 10)) {
        console.log('Password must be between 6 and 10 characters');
        Alert.alert('Password must be between 6 and 10 characters');
        return false;
    }
    return true;
}