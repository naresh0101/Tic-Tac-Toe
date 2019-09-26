import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './Compo/Gamefile';
import Players from './Compo/Players';
import './Style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            player1:'',
            player2:'',
            visible:'none'
           
         }
    }
    datas=(p1,p2)=>{
        this.setState({
            player1:p1,
            player2:p2,
            visible:'block'
        });
        
        
    }
    render() {
        return (
            <div className="App">
              <Players  getdata={this.datas}/>
              <div style={{display:this.state.visible}}>
                 <Game player_X={this.state.player1}  player_O={this.state.player2}/>
              </div>
            </div>
          )
    }
}

export default App

