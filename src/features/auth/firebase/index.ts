import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'


export const _signInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            webClientId: '261753105416-vdg0lpa22hriub5db4framss2cpr73e9.apps.googleusercontent.com',
            
        });
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
        // await GoogleSignin.hasPlayServices();
        // const userInfo = await GoogleSignin.signIn(); // Получаем информацию о пользователе
        // const { idToken } = userInfo; // Получаем idToken из userInfo
        // const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        // await auth().signInWithCredential(googleCredentials); // Авторизуемся с учетными данными Google
        // return userInfo;

    } catch (error) {
        console.log('=> Google Sign In', error)
        return null
    }
}