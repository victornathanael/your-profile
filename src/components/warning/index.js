import { StyleSheet, Text, View } from 'react-native';
import WarningIcon from 'react-native-vector-icons/AntDesign';

export default function Warning() {
    return (
        <View style={styles.warningContainer}>
            <WarningIcon
                style={{ padding: 5, paddingHorizontal: 17 }}
                name='warning'
                size={18}
                color='#8b6421'
            ></WarningIcon>
            <Text style={styles.warningText}>
                <Text style={{ fontFamily: 'Montserrat_700Bold' }}>
                    Completar perfil:{' '}
                </Text>
                Preencha suas informações para encontrar pacientes.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    warningContainer: {
        alignItems: 'center',
        marginLeft: 20,
        width: '90%',
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: '#f8f4c4',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#d6bb8e',
        paddingVertical: 10,
    },
    warningText: {
        flexWrap: 'wrap',
        width: '90%',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        color: '#987635',
        paddingRight: 10,
    },
});
