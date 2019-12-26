import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className='toolbar_toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"> &lt; SarahCodes / &gt; </a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="https://www.linkedin.com/in/sarahpham99/">LinkedIn</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;