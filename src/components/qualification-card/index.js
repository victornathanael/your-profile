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
        borderRadius: 10,
        width: 250,
        margin: 10,
    },
    image: {
        width: 250,
        height: 170,
        borderRadius: 10,
    },
    title: {
        fontFamily: 'Montserrat_400Regular',
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        margin: 15,
        paddingHorizontal: 10,
        color: '#ffffff',
        borderRadius: 5,
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 18,
        position: 'absolute',
        color: '#ffffff',
        padding: 10,
        bottom: 0,
    },
});
