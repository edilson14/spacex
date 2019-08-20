import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class LaunchInfo extends Component {

    state = {
        launch: [],
    }
    constructor(props) {
        super(props)
        this.state = {
            launch: this.props.navigation.getParam('launch')
        }
    }

    openArticle = () => {
        this.props.navigation.navigate('Article', {
            link: this.state.launch.links.article_link
        });
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`
    })

    render() {
        // debugger
        // console.log(this.state.launch)
        // const launch = this.props.navigation.getParam('launch')
        return (
            <ScrollView style={styles.main}>

                <View style={styles.header}>
                    <Image
                        source={{
                            uri: `${this.state.launch.links.mission_patch}`
                        }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>{this.state.launch.details ? this.state.launch.details : 'No Details'}</Text>

                        <TouchableOpacity style={styles.button}
                            onPress={this.openArticle}
                        >
                            <Text style={styles.buttonText}>Read Article</Text>
                        </TouchableOpacity>
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
    },
    button: {

        marginTop: 10,
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        // paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff'
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12,
        textAlign: 'center'
    }
})