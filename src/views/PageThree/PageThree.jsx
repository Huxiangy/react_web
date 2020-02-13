import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class pageThree extends Component {
    
    render() {
        return (
            <div>这里只有管理员才能看见哦! 3333</div>
        )
    }

}

export default withRouter(pageThree)