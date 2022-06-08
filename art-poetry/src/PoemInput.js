// import React from "react"

const PoemInput = props => {

    

    return (
        <div>
            <textarea
            type="text"
            value={props.text}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default PoemInput