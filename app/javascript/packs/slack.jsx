import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SidePanel from '../packs/side_panel';
import MainPanel from '../packs/main_panel';

class Slack extends Component {
    constructor() {
        super()
        this.state = { users: 
          [
            { name: "Vi 1", status: 'online' },
            { name: "Vi 2", status: 'offline' },
            { name: "Vi 3", status: 'online' },
            { name: "Vi 4", status: 'online' },
          ] 
        }
    }
    
    render() {
        return (
            <div id="slack-app">
                <SidePanel users={this.state.users}/>
                <MainPanel />
            </div>
        )
    }
}




document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Slack/>,
      document.body.appendChild(document.getElementById('app'))
    )
  })