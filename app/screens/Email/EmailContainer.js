import React, { Component } from 'react';
import EmailView from './EmailView';
import { connect } from 'react-redux';

class EmailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EmailView {...this.props} />;
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
)(EmailContainer);
