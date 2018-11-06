import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import ClaimSuccess from 'app/components/claim/ClaimSuccess';
import ClaimFailed from 'app/components/claim/ClaimFailed';

class ClaimView extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            success: true
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.success ? <ClaimSuccess/> : <ClaimFailed/>}
            </View>
        );
    }
}

export default ClaimView;
