import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Selfie from './pictures/favorite.jpg';
import './App.css';
import background from './pictures/background.jpg';

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
    const background

    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return(
      <div styles={{ backgroundImage: 'url(${background})'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <main style={{marginLeft: '100px'}}> 


          <article className="card card--wide">
            <div class="card_media">
              <img src={Selfie} alt="selfie" width="800px"/>
            </div>
            <div class="card_content">

                <p className="card_excerpt">
                  Hi, I'm Sarah and NOT welcome to my page! This website was made 
                  by me using ReactJS on VSCode. Feel free to browse the navigation bar.
               </p>

            </div>
          </article>
          
          </ main>
      </div>
    );
  }

}

export default App;