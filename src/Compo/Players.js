import React, { Component } from 'react';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hide:'' 
         }
    }
    onsubmit=(e)=>{
        var player_X= document.getElementById('p_1').value;
        var player_O = document.getElementById('p_2').value;

        if (player_X != '' && player_O != ''){
            this.props.getdata(player_X,player_O)
            this.setState({
                hide:'none'
            })
        }   
    }

    render() { 
        return ( 
            <div className="card" style={{display:this.state.hide}} > 
            <h1>Welcome to Tic Tac Toe</h1>
            <span className="logo"><img  className="logo" width="150px" src="./Images/logo.jpeg" /></span>  
                    <span>
                    <p style={{color:'#ff1744'}}> Player X</p>
                    <input type="text" placeholder="Your good name..."  id="p_1" />
                    </span>

                    <span>
                    <p style={{color:'#ff1744'}}>Player O</p>
                    <input type="text" placeholder="Your good name..."  id="p_2" />
                    </span>
                    <br/>
                    <button className="Next" type="submit" onClick={this.onsubmit }> Next </button>
            </div>
         );
    }
}
 
export default Players;