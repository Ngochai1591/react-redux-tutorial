import React, {Component} from "react";
import "./App.css";

import ColorPicker from './components/ColorPicker';
import SizeSettings from './components/SizeSettings';
import Result from './components/Result';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            color: 'red',
            fontSize: 15
        }
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
                                fontSize={this.state.fontSize}
                                onReceiveColor={this.onSetColor}/>

                   <SizeSettings onReceiveSize={this.onSetSize}/>
                    
                    <Result 
                            color={this.state.color}
                            fontSize={this.state.fontSize}/>
                    
                </div>
            </div>
    );
    }

}

export default App;
