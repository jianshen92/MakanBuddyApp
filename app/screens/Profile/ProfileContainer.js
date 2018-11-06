import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ProfileView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);
