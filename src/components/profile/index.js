import { Text, View } from 'react-native';
import Star from '../star/index';

export default function Profile() {
    return (
        <View style={{ margin: 20, justifyContent: 'center' }}>
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'Montserrat_600SemiBold',
                }}
            >
                Carolina Magalhães
            </Text>
            <Text
                style={{
                    marginVertical: 5,
                    fontFamily: 'Montserrat_400Regular',
                    paddingBottom: 5,
                }}
            >
                São Paulo - SP
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: 'Montserrat_400Regular',
                    }}
                >
                    (0)
                </Text>
            </View>
        </View>
    );
}
