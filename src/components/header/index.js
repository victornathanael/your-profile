import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <TextInput
                style={styles.input}
                placeholder='Buscar capacitações, profissionais...'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        backgroundColor: '#006557',
        width: '100%',
        height: '35%',
    },
    input: {
        alignSelf: 'center',
        height: 50,
        width: '80%',
        margin: 12,
        marginTop: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
});
