import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRadiation, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>
                <div id="headerLogo" style={{color: 'white', fontSize: '25px', paddingLeft: '50px'}}>
                    c<FontAwesomeIcon icon={faRadiation} style={{color:'#262833'}} className="App-logo"/>v2tracker.info
                </div>
                <div>  
                    <Link to="/">
                        Map
                    </Link>
                    <Link to="/">
                        Prevention
                    </Link>
                    <Link to="/" style={{display: 'none'}}>
                        Buy me a Ko-Fi <FontAwesomeIcon icon={faMugHot} style={{paddingLeft: '5px'}}/>
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header