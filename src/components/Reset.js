import React, {Component} from 'react';

class Reset extends Component{

    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15
        }
    }
    handleReset = () =>{
        this.props.onReceiveReset(this.state.color, this.state.fontSize);
    }
    render(){
        return(
            <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={()=>{
                        this.handleReset()
                    }}>reset</button>
        );
    }
}

export default Reset;