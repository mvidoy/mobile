import React, { Component } from 'react';

import {
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Post from './components/Post';

export default class Posts extends Component {
    static navigationOptions = {
        title: 'Posts - Tela 01',
        //Solução para centralizar o título - Osvaldo
        //https://github.com/react-navigation/react-navigation/issues/253
        //sebirdman commented on 5 Mar 2018    
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity
                    onPress={() => { navigate('Profile') }}
                    style={styles.profileButton}
                >
                    <Text style={styles.profileButtonText}>Meu Perfil</Text>
                </TouchableOpacity>
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF'
    },

    profileButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: '#069',
        borderRadius: 5,
        marginTop: 10
    },

    profileButtonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    }

});