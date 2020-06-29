import React, { Component } from 'react';

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontSize: 15,
            color: 'red'
        }
    }

    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.color !== this.props.color){
            this.setState(
                {
                    color: nextProps.color
                }
            )
        }
        if(nextProps.fontSize !== this.props.fontSize){
            this.setState(
                {
                    fontSize: nextProps.fontSize
                }
            )
        }
        
    }
    
    render() {
        var color = this.state.color;
        var fontSize = this.state.fontSize;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: {this.state.color}- Fontsize: {this.state.fontSize}</p>
                <div id="content">
                    <p style={{color: color, fontSize: fontSize}}>Nội dung settings</p>
                </div>
            </div>
        );
    }
}

export default Result;