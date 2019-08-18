import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';



class LaunchRow extends Component {

    naivgatetoInfo = () => this.props.navigation.navigate('Info', {
        launch: this.props.launch
    })

    render() {
        const { launch, index } = this.props;

        const name = launch.launch_success ? 'check' : 'close'
        return (
            <View key={launch.mission_name}>
                <View style={styles.row}>


                    <View style={styles.details}>

                        <Text style={styles.missionName}>{launch.mission_name}</Text>
                        <Text style={styles.year}>{launch.launch_year}</Text>
                    </View>

                    <View style={styles.local}>
                        <Icon
                            style={{ color: launch.launch_success ? 'green' : 'red' }}
                            name={name}
                        />
                    </View>

                    <View style={styles.info}>
                        <TouchableHighlight onPress={this.naivgatetoInfo} style={styles.button} underlayColor='#5398DC'>
                            <Text style={styles.buttonText}>Info</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 2,
        padding: 5
    },
    missionName: {
        color: 'black',
        paddingRight: 20
    },
    year: {
        color: 'grey'
    },
    local: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        minWidth: 50,
    },
    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50,
        borderRadius: 50
    },
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff'
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12,
        textAlign: 'center'
    }
})

export default withNavigation(LaunchRow);