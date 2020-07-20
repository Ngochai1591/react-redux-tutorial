import React, { Component } from 'react';
import Sort from './Sort';
import Search from './Search';

class Control extends Component {
    render() {
        return (
            <div>
                <div className="row mt-15">
                {/* Search */}
                <Search/>
                {/* Sort */}
                <Sort/>
                </div>
            </div>
        );
    }
}

export default Control;