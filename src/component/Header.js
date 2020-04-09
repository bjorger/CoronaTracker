import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRadiation } from '@fortawesome/free-solid-svg-icons';

import '../styles/Header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>
                <div id="headerLogo" style={{color: 'white', fontSize: '25px', paddingLeft: '50px'}}>
                    c<FontAwesomeIcon icon={faRadiation} className="App-logo"/>v2tracker.info
                </div>
                <div>
            
                </div>
            </header>
        )
    }
}

export default Header