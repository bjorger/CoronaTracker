import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Increase extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        if(this.props.value > 0){
          return(
            <span className="increase">
                <FontAwesomeIcon icon={faArrowUp} style={{fontSize: '15px'}}/> {this.props.value}
            </span>
            )
        }
        else{
            return(
                <span className="decrease">
                    <FontAwesomeIcon icon={faArrowDown} style={{fontSize: '15px'}}/> {this.props.value}
                </span>
            )
        }

        
    }
}

export default Increase