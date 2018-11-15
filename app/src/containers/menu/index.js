import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu-container">
                <div style={{ position: 'sticky', top: '72px' }}>
                    <nav role="navigation">
                        <ol className="navLinks">
                            <li className="firstLi">
                                <a href="javascript:void(0)" >Home</a>
                            </li>
                            <li>
                                <i className="fas fa-trophy"></i>Application
                                <ol className="insideOl">
                                    <li>
                                        <a href="javascript:void(0)">Application 1</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Application 2</a>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Menu;