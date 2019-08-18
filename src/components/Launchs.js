import React, { Component } from 'react';
import { TextInput, View, StyleSheet, FlatList } from 'react-native';
import LaunchRow from 'components/LaunchRow';

export default class Launchs extends Component {
    state = {
        isLoading: true,
        search: null,
        launchs: [],
    }
    componentDidMount() {
        return fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(jsonResponse => {
                this.setState({ launchs: jsonResponse, isLoading: false })
            })
    }

    render() {
        return (
            <View style={styles.main}>
                <TextInput style={styles.input}
                    onChangeText={text => {
                        this.setState({ search: text })
                    }}
                    placeholder='Search Launch'
                    value={this.state.search}
                />

                <FlatList
                    data={this.state.launchs.filter(launch => {
                        return !this.state.search
                            || launch.mission_name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
                    })
                    }
                    renderItem={({ item, index }) =>
                        <LaunchRow launch={item} index={index} />
                    }
                    keyExtractor={item => item.mission_name}
                    initialNumToRender={10}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        margin: 10
    },
    input: {
        padding: 5,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        borderColor: '#ddd',
        backgroundColor: '#f5f5f5',
        borderRadius: 40
    }
})
