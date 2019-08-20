import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Article extends Component {
    state = {
        link: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            link: props.navigation.getParam('link')
        }
    }
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <WebView
                source={{ uri: `${this.state.link}` }}
            />

        )
    }
}