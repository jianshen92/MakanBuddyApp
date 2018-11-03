import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Card, Title} from 'react-native-paper';

import styles from './styles';

export default class FoodItem extends Component {
    onPress = () => {
        this.props.navigation.navigate('Item');
    };

    render() {
        const { item } = this.props;
        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Card style={styles.itemContainer}>
                    <Card.Cover source={{uri: item.image}} />
                    <Card.Content>
                        <Title>{item.restaurant}</Title>
                        <View style={styles.itemDetails}>
                            <View style={styles.itemDetailsLeft}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={styles.itemDetailsRight}>
                                <Text>{item.price}</Text>
                                <Text>{item.distance}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableRipple>
        );
    }
}

FoodItem.propTypes = {
    item: PropTypes.object,
    navigation: PropTypes.object,
};