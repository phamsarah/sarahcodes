import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Selfie from './pictures/favorite.jpg';
import './App.css';

// This is the Homepage!

class App extends Component{

  // Beginning of navbar ************

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };


  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return(
      <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <main style={{marginLeft: '100px'}}> 
          <p>
            <div className="page_content">
            <ul>
              <li> <img src={Selfie} alt="selfie" width="800px"/> </li>
                <div className="words">
                  <li> Hi, I'm Sarah and welcome to my page! This website was made 
                  by me using ReactJS on VSCode. Feel free to browse the navigation bar.</li>  
                </div>
            </ul> 
            </div>
          </p>
          </main>
      </div>
    );
  }

}

export default App;