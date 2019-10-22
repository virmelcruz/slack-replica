import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import OrganizationContainer from '../packs/organization_container';
import UserListContainer from '../packs/user_list_container';

export default class SidePanel extends Component {
    render() {
        return (
            <div className="side-panel">
                <OrganizationContainer />
                <UserListContainer users={this.props.users}/>
            </div>
        );
    }
}