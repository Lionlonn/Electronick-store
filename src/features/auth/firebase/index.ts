import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'


export const _signInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '145011756893-nj085502vupmg04kdg5vu318m9efgpis.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn(); // Получаем информацию о пользователе
        const { idToken } = userInfo; // Получаем idToken из userInfo
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredentials); // Авторизуемся с учетными данными Google
        return userInfo;

    } catch (error) {
        console.log('=> Google Sign In', error)
        return null
    }
}