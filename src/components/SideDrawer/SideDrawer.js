import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses ='side-drawer open';
    }

return( 
   <nav className={drawerClasses}>
        <ul>
            <li><a href=" /">Home Page</a></li>
            <br/>
            <li><a href=" /">About Me!</a></li>
            <br/>
            <li><a href=" /">Random Photos</a></li>
            <br/>
            <li><a href=" /">Contact</a></li>
        </ul>
    </nav>
   );
};

export default sideDrawer;