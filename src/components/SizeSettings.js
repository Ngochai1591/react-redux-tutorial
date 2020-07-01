import React, {Component} from 'react';


class SizeSettings extends Component{

    constructor(props){
        super(props);
        this.state ={
            fontSize: 15
        }
    }

    componentWillReceiveProps = (nextProps) =>{
        console.log("RECEIVE PROPS")
        if(nextProps.fontSize !== this.props.fontSize){
            this.setState({
                fontSize: nextProps.fontSize
            }, ()=>{
                console.log(this.state)
            })
        }
    }
    increaseSize = (size) =>{
        if(size<35){
            this.setState({
                fontSize: size+2
            }, ()=>{
                console.log(this.state.fontSize)
                this.props.onReceiveSize(this.state.fontSize)
            })
            
        }
        else{
            console.log("cannot increase more")
        }
    }

    decreaseSize = (size) =>{
        if(size>5){
            let newSize = size -2
            console.log(newSize)
            this.setState({
                fontSize: newSize
            }, ()=>{
                console.log(this.state.fontSize)
                this.props.onReceiveSize(this.state.fontSize)
            })
            
        }
        else{
            console.log("cannot decrease more")
        }
    }

    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.state.fontSize}</h3>
                    </div>
                    <div className="panel-body">
                        <button 
                                type="button" 
                                className="btn btn-success" 
                                onClick={()=>{this.decreaseSize(this.state.fontSize)}}>Giảm</button>
                            &nbsp;
                        <button 
                                type="button" 
                                className="btn btn-success"
                                onClick={()=>{this.increaseSize(this.state.fontSize)}}>Tăng</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default SizeSettings;