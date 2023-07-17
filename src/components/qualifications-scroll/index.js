import { ScrollView, FlatList } from 'react-native';
import QualificationCard from '../qualification-card';

const data = [
    {
        id: '1',
        title: 'Parceiros',
        color: '#d48a04',
        image: require('../../../assets/your-profile/alimentos.png'),
        description: 'Diabetes: alimentos para evitar',
    },
    {
        id: '2',
        title: 'Capacitações',
        color: '#3b2d72',
        image: require('../../../assets/your-profile/remedio.png'),
        description: 'Como ministrar doses',
    },
    {
        id: '3',
        title: 'Exercícios em casa',
        color: '#a0c238',
        image: require('../../../assets/your-profile/exercicio-em-casa.png'),
        description: 'Descubra exercícios simples que podem ser feitos em casa',
    },
    {
        id: '4',
        title: 'Cuidados com a pele',
        color: '#ffa07a',

        image: require('../../../assets/your-profile/cuidados-com-a-pele.png'),
        description: 'Dicas para manter a pele saudável e jovial',
    },
    {
        id: '5',
        title: 'Cuidados com idosos',
        color: '#D64550',

        image: require('../../../assets/your-profile/cuidados-com-idosos.png'),
        description: 'Aprenda a como prestar cuidados adequados a idosos',
    },
];

export default function QualificationsScroll() {
    return (
        <ScrollView horizontal style={{ marginLeft: 7 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <QualificationCard
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        color={item.color}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns={data.length}
            />
        </ScrollView>
    );
}
