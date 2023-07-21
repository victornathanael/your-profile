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
        width: 210,
        margin: 10,
    },
    image: {
        width: 210,
        height: 140,
        borderRadius: 10,
    },
    title: {
        fontFamily: 'Montserrat_400Regular',
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        margin: 17,
        paddingHorizontal: 10,
        color: '#ffffff',
        borderRadius: 5,
        textAlign: 'left',
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        position: 'absolute',
        color: '#ffffff',
        paddingHorizontal: 17,
        paddingVertical: 10,
        bottom: 0,
    },
});
