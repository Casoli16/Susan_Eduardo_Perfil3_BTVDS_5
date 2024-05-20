import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import estudiante from '../data/estudiantes';

const StudentsScreen= () => {

    return (
        <View style={styles.container}>
            <ScrollView>
            <View>
                <FlatList
                    data={estudiante}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.info}>{item.description}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />
                
            </View>
            <View style={styles.height}></View>
            </ScrollView>
        </View>
    );
};

export default StudentsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: 'white'
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
        width: 180,
        height: 300,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 180,
        height: 100,
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
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple'
    },
    texto:{
        marginHorizontal:15
    },
    contenedor: {
        alignItems: 'center',
    },
    info:{
        padding:10
    },
    height: {
        height: 80
    }
});
