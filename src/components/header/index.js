import { StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from 'react-native-vector-icons/Feather';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.inputContainer}>
                <SearchIcon
                    name='search'
                    size={18}
                    style={styles.inputIcon}
                ></SearchIcon>
                <TextInput
                    style={styles.input}
                    placeholder='Buscar capacitações, profissionais...'
                    placeholderTextColor='black'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#006557',
        width: '100%',
        height: '18%',
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    input: {
        flex: 1,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        backgroundColor: 'white',
        marginLeft: 10,
        flexWrap: 'wrap',
        width: '100%',
    },
});
