import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class LoginView extends Component {
    navigate = () => {
        this.props.onLogin('username', 'password');
    };

    register = () => {
        this.props.navigation.navigate('Register');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TouchableOpacity onPress={this.navigate}>
                    <Text>Click to Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.register}>
                    <Text>Click to Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LoginView.propTypes = {
    navigation: PropTypes.object,
    onLogin: PropTypes.func
};

export default LoginView;
