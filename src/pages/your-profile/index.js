import { StyleSheet, Text, View, Image } from 'react-native';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import QualificationsScroll from '../../components/qualifications-scroll/index';
import Profile from '../../components/profile/index';
import Warning from '../../components/warning/index';

export default function YourProfile() {
    return (
        <View style={styles.scrollViewContainer}>
            <Warning />
            <Text style={styles.yourProfileText}>Seu Perfil</Text>

            <View style={styles.profilePhotoContainer}>
                <Image
                    style={[styles.profilePhoto]}
                    source={require('../../../assets/your-profile/user-logo.png')}
                ></Image>
                <Profile />
            </View>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 5,
                }}
            >
                <View style={styles.horizontalLine} />
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
            <View>
                <QualificationsScroll />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
    },

    yourProfileText: {
        fontSize: 18,
        marginTop: 25,
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
        height: 75,
        width: 75,
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
        fontSize: 14,
        marginRight: 10,
        marginTop: 10,
        marginVertical: 5,
    },

    horizontalLine: {
        height: 1,
        width: '90%',
        backgroundColor: '#d3d3d3',
    },

    professionalQualifications: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 10,
    },

    professionalQualificationsText: {
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
        marginLeft: 7,
    },

    seeMore: {
        color: '#07689f',
        fontSize: 14,
        fontFamily: 'Montserrat_600SemiBold',
        paddingRight: 10,
        paddingLeft: 7,
    },
});
