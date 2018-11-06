import React, { Component } from 'react';
import WebsiteLinkView from './WebsiteLinkView';
import { connect } from 'react-redux';

class WebsiteLinkContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <WebsiteLinkView {...this.props} />;
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
)(WebsiteLinkContainer);
