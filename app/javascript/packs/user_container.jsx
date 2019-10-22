import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Glyphicon, Button } from 'react-bootstrap';

export default class UserContainer extends Component {
    render() {
        const { name, status } = this.props.user;
        return (
            <li>
                { name } - { status }
            </li>
        );
    }
}