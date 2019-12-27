import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '/home/sarah/deploy-react/src/logo.svg';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className='toolbar_toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"> &lt; SarahCodes / &gt; </a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                    <div>
                        <ul>
                            <li>Made with ReactJS <img src={logo} className="App-logo" alt="logo"/> </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </header>
);

export default toolbar;