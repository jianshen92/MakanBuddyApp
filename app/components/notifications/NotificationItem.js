import React, {Component} from 'react';
import {List} from 'react-native-paper';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
    constructor(props) {
        super(props);
    }

    iconSelector = ()=>'folder';
    //add a selection of icons for different types of notifications later, or photos

    _left = props => <List.Icon {...props} icon={this.iconSelector(props)}/>;

    _onPress = () => {};

    render() {
        return (
            <List.Item
                title={this.props.item.titleText}
                description={this.props.item.descriptionText}
                left={this._left}
                onPress={this._onPress}
            />
        )
    }
}

NotificationItem.propTypes = {
    item: PropTypes.object
};

export default NotificationItem;