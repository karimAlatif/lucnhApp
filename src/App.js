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
          <div className="flip-card" style={{transform:"rotate(-25deg)", left:"38%", top:"7%"}} >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src={"./icons/globe.png"}
                  alt="Avatar"
                  style={{width:"100%", height:"100%"}} 
                >
                </img>
              </div>
              <div className="flip-card-back">
                <p
                  style={{marginTop:"20%"}} 
                >Text On Hover !</p> 
              </div>
            </div>
          </div>
          <div className="flip-card" style={{transform:"rotate(-65deg)", left:"30%", top:"27%"}} >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src={"./icons/globe.png"}
                  alt="Avatar"
                  style={{width:"100%", height:"100%"}} 
                >
                </img>
              </div>
              <div className="flip-card-back">
                <p
                  style={{marginTop:"20%"}} 
                >Text On Hover !</p> 
              </div>
            </div>
          </div> 
          <div className="flip-card" style={{transform:"rotate(-115deg)", left:"30%", top:"58%"}} >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src={"./icons/globe.png"}
                  alt="Avatar"
                  style={{width:"100%", height:"100%"}} 
                >
                </img>
              </div>
              <div className="flip-card-back">
                <p
                  style={{marginTop:"20%"}} 
                >Text On Hover !</p> 
              </div>
            </div>
          </div> 
         
          <div className="flip-card" style={{transform:"rotate(25deg)", right:"38%", top:"8%"}} >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src={"./icons/globe.png"}
                  alt="Avatar"
                  style={{width:"100%", height:"100%"}} 
                >
                </img>
              </div>
              <div className="flip-card-back">
                <p
                  style={{marginTop:"20%"}} 
                >Text On Hover !</p> 
              </div>
            </div>
          </div>
          <div className="flip-card" style={{transform:"rotate(65deg)", right:"30%", top:"27%"}} >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src={"./icons/globe.png"}
                  alt="Avatar"
                  style={{width:"100%", height:"100%"}} 
                >
                </img>
              </div>
              <div className="flip-card-back">
                <p
                  style={{marginTop:"20%"}} 
                >Text On Hover !</p> 
              </div>
            </div>
          </div> 
          <div className="flip-card" style={{transform:"rotate(115deg)", right:"30%", top:"58%"}} >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src={"./icons/globe.png"}
                  alt="Avatar"
                  style={{width:"100%", height:"100%"}} 
                >
                </img>
              </div>
              <div className="flip-card-back">
                <p
                  style={{marginTop:"20%"}} 
                >Text On Hover !</p> 
              </div>
            </div>
          </div> 
        

          <div className="app osx-example">
            <Dock 
              width={Math.min(1000)}
              className="dock"
              magnification={1}
              magnifyDirection="up"
              >
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((item, index) => (
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

            {/* <h1 className="title text-center">PROPETERRA</h1> */}
          </>
        )}
      </div>
    );
  }
}

export default App;
