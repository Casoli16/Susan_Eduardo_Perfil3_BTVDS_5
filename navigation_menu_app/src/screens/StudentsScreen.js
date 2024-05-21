import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estudiante from '../data/estudiantes';

const StudentsScreen = () => {
    return (
        <LinearGradient colors={['#DC6AF6', '#FFFFFF']} style={styles.linearGradient}>
            <ScrollView>
                <View>
                    <FlatList
                        data={estudiante}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Text style={styles.mainTitle}>{item.promedio}</Text>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.title}>Grado:</Text>
                                <Text style={styles.info}>{item.grado}</Text>
                                <Text style={styles.title}>Carnet:</Text>
                                <Text style={styles.info}>{item.carnet}</Text>
                                <Text style={styles.title}>Especialidad:</Text>
                                <Text style={styles.info}>{item.especialidad}</Text>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.info}>{item.description}</Text>
                                <View style={styles.row}>
                                    <Text style={styles.title}>Edad:</Text>
                                    <Text style={styles.info}>{item.edad}</Text>
                                    <Text style={styles.title}> || </Text>
                                    <Text style={styles.title}> Género:</Text>
                                    <Text style={styles.info}>{item.genero}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </View>
                <View style={styles.height}></View>
            </ScrollView>
        </LinearGradient>
    );
};

export default StudentsScreen;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 20,
    },
    flatListContainer: {
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 25,
        width: 300,
        height: 550,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15
    },
    image: {
        marginVertical: 10,
        width: 250,
        height: 150,
        marginBottom: 10,
        borderRadius: 8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainTitle: {
        backgroundColor: '#E7CFFC',
        padding: 10,
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 20,
        borderRadius: 55,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'purple'
    },
    texto: {
        marginHorizontal: 15
    },
    contenedor: {
        alignItems: 'center',
    },
    info: {
        padding: 10
    },
    height: {
        height: 80
    }
});
