import React, { Component} from 'react'

class Picture extends Component {
    render() {
    
        return (
            <div>
                <img id="picture" src={'/shirts'}/>
            </div>
        )
    }
}

export default Picture;