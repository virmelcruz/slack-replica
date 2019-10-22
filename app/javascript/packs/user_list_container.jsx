import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Glyphicon, Button } from 'react-bootstrap';
import UserContainer from '../packs/user_container';

export default class UserListContainer extends Component {

    renderUser() {
        const { users } = this.props;
        return (
          users.map( (user, index) => {
            return (
              <UserContainer 
                key={ index }
                user={ user }
              />
            )
          })
        )
    }

    render() {
        return (
            <div className="user-list-container">
                <h5>
                    Users
                </h5>
                <ul>
                    { this.renderUser() }
                </ul>
            </div>
        );
    }
}