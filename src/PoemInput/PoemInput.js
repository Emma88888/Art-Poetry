import React from "react"

const PoemInput = props => {

    return (
        <div className="poem-input-box">
            <textarea
            type="text"
            value={props.text}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default PoemInput