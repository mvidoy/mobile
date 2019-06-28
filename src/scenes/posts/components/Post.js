import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Posts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.postTitle}>Post title</Text>
                <Text style={styles.postDescription}>Eu id anim culpa est occaecat do occaecat aliquip velit occaecat proident. Mollit exercitation eu labore est ea aute quis dolor ex. Amet Lorem aliquip ut aute eiusmod cupidatat aute magna. Id proident aute ullamco et Lorem fugiat. Aliqua voluptate nisi ut proident ad irure aliqua consectetur laborum exercitation in. Adipisicing mollit ex est deserunt veniam incididunt amet nostrud nostrud. Aliqua ipsum proident amet occaecat ad aliqua consequat sunt anim ad mollit ea est. Quis aute excepteur qui nulla. Fugiat ullamco ea ad amet qui ex duis fugiat sunt adipisicing officia. Cupidatat est velit ut laboris occaecat occaecat proident cupidatat dolore. Pariatur et tempor aute aliquip consectetur sunt fugiat laboris cupidatat do ex cillum in. Cillum ex ea laboris duis excepteur pariatur dolore velit sit mollit.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    },

    postTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    postDescription: {
        marginTop: 10
    }
});