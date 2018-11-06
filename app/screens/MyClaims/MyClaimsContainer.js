import React, { Component } from 'react';
import MyClaimsView from './MyClaimsView';
import { connect } from 'react-redux';

class MyClaimsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MyClaimsView {...this.props} />;
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
)(MyClaimsContainer);
