import React from "react"
import '../styles/Sources.css'


export default class Sources extends React.Component{
    render(){
        return(
            <div id="Sources" className="page" style={{height: '73vh'}}>
                <h1 style={{color: 'white', fontSize: '18px', paddingTop: '20px'}}>
                    The data displayed on this site is pulled from the following sources
                </h1>
                <div>
                    <ul>
                        <li>
                            <a href="https://rapidapi.com/Gramzivi/api/covid-19-data/endpoints" target="_blank">India</a>
                        </li>
                        <li>
                            <a href="https://github.com/NovelCOVID/API" target="_blank">World, Europe, Asia, North America, South America, Oceania, Africa, Middle East</a>
                        </li>
                        <li>
                            <a href="https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics" target="_blank">China, Australia, USA</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}