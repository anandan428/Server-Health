import React from 'react';
import './header.css';

const Header = props => (
        <div className="header" id="header">
            <a href="javascript:void(0)" className="header-brand">Server Monitoring</a>
            <div style={{marginRight: '5rem'}}>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
)


export default Header;