import React, { Component } from 'react';
import { View } from 'react-native';
import { Headline, IconButton, Divider, Text } from 'react-native-paper';
import styles from './styles';

class ProfileFieldItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { headerTitle } = this.props;
        return (
            <View>
                <View style={styles.itemHeader}>
                    <Headline>{ headerTitle }</Headline>
                    <IconButton icon='edit' onPress={this.props.onPressIcon}/>
                </View>
                <Divider style={styles.divider}/>
                <Text style={styles.text}>{ this.props.currentValue }</Text>
            </View>
        )
    }
}

export default ProfileFieldItem;