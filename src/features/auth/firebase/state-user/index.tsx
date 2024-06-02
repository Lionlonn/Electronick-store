import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface AuthState {
    initializing: boolean;
    user: FirebaseAuthTypes.User | null;
}

export function useStateUserAuth(): AuthState {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return () => subscriber(); 
    }, [initializing]);

    return { initializing, user };
}
