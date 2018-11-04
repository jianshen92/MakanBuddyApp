import React, {Component} from 'react';
import {List} from 'react-native-paper';
import NotificationItem from './NotificationItem';

class NotificationsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List.Section>
                {this.props.notifications.map(notification=><NotificationItem key={notification.ID} item={notification}/>)}
            </List.Section>
        )
    }
}

export default NotificationsList;
