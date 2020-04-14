import React from "react"
import '../../styles/Suggestions.css'

const Suggestion = (props) => {
    const options = props.results.map(result => (
        <li onClick={() => {props.onClick(result)}}>
            {result.country}
        </li>
    ))
    return <ul className="suggestions">{options}</ul>
}

export default Suggestion