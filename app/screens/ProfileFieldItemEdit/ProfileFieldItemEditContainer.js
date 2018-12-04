import React, { Component } from 'react';
import ProfileFieldItemEditView from './ProfileFieldItemEditView';
import { connect } from 'react-redux';

class ProfileFieldItemEditContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ProfileFieldItemEditView {...this.props} />;
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
)(ProfileFieldItemEditContainer);
