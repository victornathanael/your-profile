import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import QualificationsScroll from '../../components/qualifications-scroll/index';
import Profile from '../../components/profile/index';
import Warning from '../../components/warning/index';

export default function YourProfile() {
    return (
        <ScrollView style={styles.yourProfileContainer}>
            <Warning />
            <Text
                style={{
                    fontSize: 20,
                    marginTop: 20,
                    marginBottom: 5,
                    marginLeft: 20,
                    fontFamily: 'Montserrat_500Medium',
                }}
            >
                Seu Perfil
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginStart: 20,
                }}
            >
                <Image
                    style={{
                        height: 90,
                        width: 90,
                        borderRadius: 100,
                    }}
                    source={require('../../../assets/your-profile/user-logo.png')}
                ></Image>
                <Profile />
            </View>
            <Text
                style={{
                    alignSelf: 'center',
                    width: '90%',
                    height: 1,
                    backgroundColor: '#d3d3d3',
                    marginVertical: 10,
                }}
            ></Text>
            <View style={styles.completeProfile}>
                <Text
                    style={{
                        color: '#07689f',
                        fontFamily: 'Montserrat_600SemiBold',
                        fontSize: 18,
                        marginRight: 10,
                        marginTop: 10,
                        marginVertical: 5,
                    }}
                >
                    Completar perfil
                </Text>
                <ArrowRightIcon
                    name='arrowright'
                    color={'#07689f'}
                    size={22}
                ></ArrowRightIcon>
            </View>
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 30,
                    marginHorizontal: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'Montserrat_500Medium',
                    }}
                >
                    Capacitações profissionais
                </Text>
                <Text
                    style={{
                        color: '#07689f',
                        fontSize: 18,
                        fontFamily: 'Montserrat_600SemiBold',
                        paddingRight: 20,
                    }}
                >
                    Ver mais
                </Text>
            </View>
            <QualificationsScroll />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    yourProfileContainer: {
        flex: 1,
    },

    completeProfile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 150,
        width: 170,
        borderRadius: 10,
    },
});
