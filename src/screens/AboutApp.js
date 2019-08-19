import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AboutApp extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 40 }}>

                <Text style={styles.header}>
                    About Space-X API
                </Text>

                <Icon
                    name="rocket"
                    color="red"
                    size={100}
                    style={styles.icon}
                />

                <Text style={styles.text}>
                    Open Source REST API for rocket, core, capsule, pad, and launch data
                </Text>
                    <Text>Docs</Text>
                    <Text>Clients</Text>
                    <Text>Apps</Text>
                    <Text>Status</Text>
                    <Text>Database</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20
    },
    icon: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    text: {
        fontSize: 14,
        color: '#444',
        marginTop: 20
    }
})