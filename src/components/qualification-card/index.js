import { StyleSheet, View, Image, Text } from 'react-native';

export default function QualificationCard({
    title,
    color,
    image,
    description,
}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={[styles.title, { backgroundColor: color }]}>
                {title}
            </Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 180,
        margin: 8,
    },
    image: {
        width: 180,
        height: 120,
        borderRadius: 5,
    },
    title: {
        fontFamily: 'Montserrat_400Regular',
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        margin: 10,
        paddingHorizontal: 10,
        color: '#ffffff',
        borderRadius: 5,
        textAlign: 'left',
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12,
        position: 'absolute',
        color: '#ffffff',
        paddingLeft: 10,
        paddingRight: 40,
        paddingVertical: 10,
        bottom: 0,
    },
});
