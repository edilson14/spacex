import React, { Component } from 'react';
import Launchs from 'components/Launchs'
import { View, Text, StyleSheet } from 'react-native';


export default class LaunchList extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <Text style={styles.header} >
                    Space X Launchs
                </Text>
                <Launchs />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 40,
        fontSize: 30,
        textAlign: 'center',
        color: '#0066CC',
        fontWeight: '300'
    }
})