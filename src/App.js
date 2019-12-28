import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Selfie from './pictures/favorite.jpg';
import './App.css';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';

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


          <Card>
            <CardMedia>
              <img src={Selfie} alt="selfie" width="800px"/>
            </CardMedia>
            <CardContent>
              <Typography>
                <div className="page_content">
                  Hi, I'm Sarah and welcome to my page! This website was made 
                  by me using ReactJS on VSCode. Feel free to browse the navigation bar.
                </div>
                  
              </Typography>
            </CardContent>
          </Card>
          
          </main>
      </div>
    );
  }

}

export default App;