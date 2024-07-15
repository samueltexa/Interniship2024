import { Alert } from "react-native";

export const userNameValidation = (userName: string) => {
    // check if the userName is empty
    if (!userName) {
        console.log('User Name is required');
        // Alert.alert('User Name is required');
        return false;
        // Update error message

        // check if the userName is less than 3 characters or more
    } if (!(userName.length >= 3 && userName.length <= 10)) {
        console.log('User Name must be between  and 10 characters');
        // Alert.alert('User Name must be between 3 and 10 characters');
        return false;
    }
    return true;
}