import { StyleSheet, Text, View } from 'react-native';
import Star from '../star/index';

export default function Profile() {
    return (
        <View style={styles.profileContainer}>
            <Text style={styles.profileName}>Carolina Magalhães</Text>
            <Text style={styles.profileCity}>São Paulo - SP</Text>
            <View style={styles.starsContainer}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Text style={styles.countStar}>(0)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        display: 'flex',
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'flex-start',
        width: '80%',
    },

    profileName: {
        width: '100%',
        fontSize: 18,
        fontFamily: 'Montserrat_600SemiBold',
        flexWrap: 'wrap',
    },
    profileCity: {
        marginVertical: 5,
        fontFamily: 'Montserrat_400Regular',
        paddingBottom: 5,
        flexWrap: 'wrap',
        fontSize: 12,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countStar: {
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular',
    },
});
