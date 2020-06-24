import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            
            <nav className="navbar navbar-inverse">
                <a href="/#" className="navbar-brand">Title</a>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/#">Trang Chủ</a>
                    </li>
                    <li className="active">
                        <a href="/#">Danh mục sản phẩm</a>
                    </li>
                </ul>
            </nav>
            
        );
    }
}

export default Header;