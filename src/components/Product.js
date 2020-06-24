import React, {Component} from 'react';

class Product extends Component{
    render(){
        return(
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
                <img src="/#" alt="test"/>
                <div className="caption">
                    <h3>Iphone 6 plus</h3>
                    <p>
                        16.000.000
                    </p>
                    <p>
                        <a href="/#" className="btn btn-primary">Action</a>
                        <a href="/#" className="btn btn-default">Action</a>
                    </p>
                </div>
            </div>
        </div>
        
           
        );
    }
}

export default Product;