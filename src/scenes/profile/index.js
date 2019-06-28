import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Meu Perfil - Tela 02',
        //Solução para centralizar o título - Osvaldo
        //https://github.com/react-navigation/react-navigation/issues/253
        //sebirdman commented on 5 Mar 2018    
        headerTitleStyle: {       
            textAlign: "center",
            flex: 1
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>I'm the Profile component  </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});