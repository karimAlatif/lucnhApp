import React, { Component } from "react";
import { HamburgerArrowTurn } from "react-animated-burgers";
import Dock from "react-osx-dock";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

// import "./mine.css";

import Scene from "./Scene";
import Popup from "./Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }
  togglePopup = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };
  render() {
    return (
      <div className="wrapper">
        {/* <HamburgerArrowTurn
          className="hamburger-button"
          isActive={this.state.showDetails}
          toggleButton={this.togglePopup}
          barColor="white"
        /> */}
        <Scene />
        {this.state.showDetails ? (
          // <Popup />
          null
        ) : ( 
          <>
          <div className="app osx-example">
            <Dock 
              width={Math.min(800, window.innerWidth * 0.5)}
              className="dock"
              magnification={.7}
              magnifyDirection="up"
              >
              {["a", "b", "c", "d", "e", "f", "g"].map((item, index) => (
                <Dock.Item 
                  key={index}
                  className="dock-item"
                  onClick={() => console.log(item)}
                >
                  <img 
                    // style={{width:"100%"}}
                    src={`./icons/im/${item}.png`} 
                  />
                </Dock.Item>
              ))}
            </Dock>
          </div>
            {/* <img className="title text-center" style={{width:"70%", height:"50%"}} src= {"https://media0.giphy.com/media/KeKT3mcAgZRcvTl7pe/giphy.gif"} alt="Trulli"></img> */}
            {/* <h1 className="title text-center">PROPETERRA</h1> */}
          </>
        )}
      </div>
    );
  }
}

export default App;
