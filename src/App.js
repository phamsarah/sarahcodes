import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Selfie from './pictures/favorite.jpg';

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
      <div className={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '300px'}}> 
        <p> This is the page content

          <div className="selfie_picture">

            <img src={Selfie} alt="selfie"/>
          
          </div>
        </p>
        </main>
      </div>
    );
  }


      // End of navbar! ***********




}

export default App;