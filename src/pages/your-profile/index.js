import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import QualificationsScroll from '../../components/qualifications-scroll/index';
import Profile from '../../components/profile/index';
import Warning from '../../components/warning/index';

export default function YourProfile() {
    return (
        <ScrollView style={styles.scrollViewContainer}>
            <Warning />
            <Text style={styles.textProfile}>Seu Perfil</Text>

            <View style={styles.profilePhotoContainer}>
                <Image
                    style={styles.profilePhoto}
                    source={require('../../../assets/your-profile/user-logo.png')}
                ></Image>
                <Profile />
            </View>
            <View style={styles.completeProfile}>
                <Text style={styles.completeProfileText}>Completar perfil</Text>
                <ArrowRightIcon
                    style={{ paddingTop: 5 }}
                    name='arrowright'
                    color={'#07689f'}
                    size={22}
                ></ArrowRightIcon>
            </View>
            <View style={styles.professionalQualifications}>
                <Text style={styles.professionalQualificationsText}>
                    Capacitações profissionais
                </Text>
                <Text style={styles.seeMore}>Ver mais</Text>
            </View>
            <QualificationsScroll />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
    },

    textProfile: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 20,
        fontFamily: 'Montserrat_500Medium',
    },

    profilePhotoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 20,
        paddingEnd: 60,
    },

    profilePhoto: {
        height: 90,
        width: 90,
        borderRadius: 100,
    },

    completeProfile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    completeProfileText: {
        color: '#07689f',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 18,
        marginRight: 10,
        marginTop: 10,
        marginVertical: 5,
    },

    professionalQualifications: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 10,
    },

    professionalQualificationsText: {
        fontSize: 18,
        fontFamily: 'Montserrat_500Medium',
    },

    seeMore: {
        color: '#07689f',
        fontSize: 18,
        fontFamily: 'Montserrat_600SemiBold',
        paddingRight: 20,
    },
});
