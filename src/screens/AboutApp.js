import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { openLink } from 'utils/functions'

export default class AboutApp extends Component {

    render() {
        return (
            <View style={{ flex: 1, padding: 0 }}>
                <ImageBackground
                    source={{ uri: 'https://camo.githubusercontent.com/b950bbb576a5b4cbd59b125e23450871fa6a2c8e/68747470733a2f2f6c6976652e737461746963666c69636b722e636f6d2f36353533352f34383035323236393635375f653233363239306639325f6b2e6a7067' }}
                    style={styles.backgorundImage}
                >



                    <Text style={styles.header}>
                        About Space-X API
                </Text>

                    <Icon
                        name="rocket"
                        color="red"
                        size={80}
                        style={styles.icon}
                        onPress={() => openLink('https://github.com/r-spacex/SpaceX-API')}
                    />

                    <Text style={styles.text}>
                        Open Source REST API for rocket, core, capsule, pad, and launch data
                    </Text>

                    <View>
                        <Fragment>
                            <View style={styles.links}>

                                <TouchableHighlight
                                    style={styles.linkButton}
                                    onPress={() => openLink("https://docs.spacexdata.com/?version=latest")}
                                >
                                    <Text style={styles.linksText}>
                                        Docs
                                </Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.linkButton}
                                    onPress={() => openLink('https://github.com/r-spacex/SpaceX-API/blob/master/docs/clients.md')}
                                >
                                    <Text style={styles.linksText}>Clients</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.linkButton}
                                    onPress={() => openLink('https://github.com/r-spacex/SpaceX-API/blob/master/docs/apps.md')}
                                >
                                    <Text style={styles.linksText}>Apps</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.linkButton}
                                    onPress={() => openLink('https://status.spacexdata.com/')}
                                >
                                    <Text style={styles.linksText}>Status</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.linkButton}
                                    onPress={() => openLink('https://backups.jakemeyer.ml/')}
                                >
                                    <Text style={styles.linksText}>Database</Text>
                                </TouchableHighlight>
                            </View>
                        </Fragment>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    backgorundImage: {
        height: '100%',
        width: '100%'
    },
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
        textAlign: "center",
        fontSize: 15,
        color: '#444',
        marginTop: 20
    },
    links: {
        alignSelf: 'center'
    },
    linkButton: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#06C'
    },
    linksText: {
        textAlign: "center",
        fontSize: 12,
        color: '#06C'
    }
})