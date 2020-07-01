import React, {Component} from "react";
import "./App.css";

import ColorPicker from './components/ColorPicker';
import SizeSettings from './components/SizeSettings';
import Result from './components/Result';
import Reset from './components/Reset';
class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            color: 'red',
            fontSize: 15
        }
    }

    onSetReset = (color, fontSize) =>{
        console.log("RESETING")
        this.setState({
            color: color,
            fontSize: fontSize
        });
    }

    onSetColor = (color) =>{
        this.setState({
            color: color
        })
    }

    onSetSize = (fontSize) =>{
        this.setState({
            fontSize: fontSize
        })
        console.log(this.state.fontSize)
    }


    render(){
        return (
            <div className="container mt-50">
                <div className="row">
                   <ColorPicker 
                                color={this.state.color} 
                                onReceiveColor={this.onSetColor}/>

                   <SizeSettings    fontSize={this.state.fontSize}
                                    onReceiveSize={this.onSetSize}/>
                    
                    <Reset onReceiveReset={this.onSetReset}/>
                    <Result 
                            color={this.state.color}
                            fontSize={this.state.fontSize}/>
                    
                </div>
            </div>
    );
    }

}

export default App;
