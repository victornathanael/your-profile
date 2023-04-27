import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/index';

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.Text}>Seu perfil</Text>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
    Text: {
        fontSize: 50,
    },
});
