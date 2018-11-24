import React, {Component} from 'react';
import {View} from 'react-native';
import NotificationsList from './NotificationsList';

class NotificationsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {/*insert stuff here for display control*/}
                <NotificationsList notifications={[
                    {
                        ID:0, 
                        titleText: 'remember to claim this', 
                        descriptionText: 'food1',
                        navigationProperties: '',
                        notificationType:''
                    },
                    {
                        ID:1, 
                        titleText: 'remember to claim this', 
                        descriptionText: 'food2',
                        navigationProperties: '',
                        notificationType:''
                    },
                    {
                        ID:2, 
                        titleText: 'remember to claim this', 
                        descriptionText: 'food3',
                        navigationProperties: '',
                        notificationType:''
                    }
                ]}/>
            </View>
        )
    }
}

export default NotificationsView;

