'use strict';

var React = require('react-native');

var {
        Text,
        View,
        StyleSheet
    } = React;

var TestView = React.createClass({
    render() {
        console.log('TestView render');
        return <View style={styles.container} onAccessibilityTap={function(){console.log('onAccessibilityTap!');}}>
            <Text>哈哈哈 TestView!</Text>
        </View>
    }
});

var styles = StyleSheet.create({
    container: {
        height: 400,
        backgroundColor: 'red',
        flex: 1
    }
});

module .exports = TestView;