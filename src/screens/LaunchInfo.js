import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class LaunchInfo extends Component {

    state = {
        launch: {},
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`
    })

    render() {
        // debugger
        // console.log(this.state.launch)
        const launch = this.props.navigation.getParam('launch')
        return (
            <ScrollView style={styles.main}>

                <View style={styles.header}>
                    <Image
                        source={{
                            uri: `${launch.links.mission_patch}`
                        }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>{launch.details ? launch.details : 'No Details'}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10
    },
    header: {
        flexDirection: 'column'
    },
    image: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        margin: 20,
    },
    details: {
        marginTop: 20,
    },
    detailsText: {
        fontSize: 12,
        color: '#000'
    }
}) 