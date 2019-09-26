import React, { Component } from 'react';
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            yourmove: '',
            listOfMoves:['','','','','','','','',''],
            algoritham:[
                ['0','1','2'],
                ['3','4','5'],
                ['6','7','8'],
                ['0','3','6'],
                ['1','4','7'],
                ['2','5','8'],
                ['0','4','8'],
                ['2','4','6']
            ],
            result : false,
            playerwin:'',
            turn:'none',
            winner:'none'
            
         }

    }

    // Inside the player_1 or player_2 method  user will select there turn
    player_1(){
        this.setState({
            yourmove:this.state.yourmove = 'X',
            turn:'block'
        })
    }
    player_2(){
        this.setState({
            yourmove:this.state.yourmove = 'O',
            turn:'block'
        })
    }
    // in this function player will play their moves :)
    move(bx_num){
        
        if (this.state.result != true){
            if (document.getElementById('box-'+bx_num).innerHTML== ''){
                this.setState({
                    yourmove:this.state.yourmove == 'X' ? 'O' : 'X'
                })
            }
            if (document.getElementById('box-'+bx_num).innerHTML == ''){
                document.getElementById('box-'+bx_num).innerHTML = this.state.yourmove;
            }
            if (this.state.listOfMoves[bx_num]== ''){
                this.state.listOfMoves[bx_num] = this.state.yourmove
                
            }
            let ListOfMoves = this.state.listOfMoves
            for (let i of this.state.algoritham){
                if (ListOfMoves[i[0]] == ListOfMoves[i[1]] && ListOfMoves[i[2]] == ListOfMoves[i[0]] && ListOfMoves[i[0]] !== ""){
                    this.state.result = true
                    this.state.playerwin =  this.state.yourmove
                    this.setState({ winner:'block' })
                }
            }   
        } 
    }
    render() { 
        return ( 
            <center>
                <h1 style={{textTransform:'capitalize'}}>{this.props.player_X} V/S {this.props.player_O}</h1>
                <h3>Who want to start the game first {this.props.player_X} or {this.props.player_O}</h3>
                <button id="playerchoice" onClick={ ()=>this.player_1() } ><h2>{this.props.player_X}</h2></button>
                <button id="playerchoice" onClick={ ()=>this.player_2() } ><h2>{this.props.player_O}</h2></button>
                <h2 style={{display:this.state.turn}}>Your turn {this.state.yourmove}</h2>

                <table>
                    <tr>
                        <td id="box-0" className="field" onClick={ ()=>this.move('0') } ></td>
                        <td id="box-1" className="field" onClick={ ()=>this.move('1') } ></td>
                        <td id="box-2" className="field" onClick={ ()=>this.move('2') } ></td>
                    </tr>
                    <tr>
                        <td id="box-3" className="field" onClick={ ()=>this.move('3') } ></td>
                        <td id="box-4" className="field" onClick={ ()=>this.move('4') } ></td>
                        <td id="box-5" className="field" onClick={ ()=>this.move('5') } ></td>
                    </tr> 
                    <tr>
                        <td id="box-6" className="field" onClick={ ()=>this.move('6') } ></td>
                        <td id="box-7" className="field" onClick={ ()=>this.move('7') } ></td>
                        <td id="box-8" className="field" onClick={ ()=>this.move('8') } ></td>
                    </tr>
                </table>

                <h1 style={{display:this.state.winner}}>Winner is {this.state.playerwin}</h1>
            </center>
         );
    }
}
 
export default Game;

