import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MainPanelHeader from '../packs/main_panel_header';

export default class MainPanel extends Component {
    render() {
        return (
            <div className="main-panel">
                <MainPanelHeader />
            </div>
        );
    }
}