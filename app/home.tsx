import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';


const data = [
    {
        id: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: '2',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://via.placeholder.com/100',
    },
    {
        id: '3',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: 'https://via.placeholder.com/100',
    },
];

interface listItemProps {
    item: {
        id: string;
        text: string;
        image: string;
    };
}

const ListItem = ({ item }: listItemProps) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.text}</Text>
    </View>
);

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href="/" style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={styles.backText}>Sair</Text>
                </Link>
            </View>
            <Text style={styles.title}>HOME</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        marginLeft: 5,
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 30,
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'justify',
    },
});
