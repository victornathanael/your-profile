import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import Header from './src/components/header/index';
import YourProfile from './src/pages/your-profile/index';

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Header />
            <YourProfile />
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});
